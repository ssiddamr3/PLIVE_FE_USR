import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { geoPath, geoAlbersUsa } from 'd3-geo';
import { feature } from 'topojson-client';
import usaTopoJson from '../data/states-10m.json';

const USAMap = ({ stateClicked, setStateClicked }) => {
  const svgRef = useRef();
  const [activeState, setActiveState] = useState(null); // State to track the currently active state

  // Timer for single click
  const clickTimerRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 960;
    const height = 600;

    // Clear any previous content
    svg.selectAll('*').remove();

    // Set up projection and path
    const projection = geoAlbersUsa().scale(1300).translate([width / 2, height / 2]);
    const path = geoPath().projection(projection);

    // Convert TopoJSON to GeoJSON
    const states = feature(usaTopoJson, usaTopoJson.objects.states);

    // Create a tooltip div
    const tooltip = d3.select("#tooltip");

    // Append states to the map
    svg.selectAll('path')
      .data(states.features)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('fill', (d) => (activeState === d.properties.name ? '#80FF44' : '#ddd')) // Change color based on active state
      .attr('stroke', '#333')
      .attr('class', 'state')
      .on('mouseover', function (event, d) {
        d3.select(this).attr('fill', '#80FF44');
        const stateName = d.properties.name;

        // Show tooltip
        tooltip.transition().duration(200).style("visibility", "visible");
        tooltip.html(stateName)
          .style("left", (event.pageX + 5) + "px") // Position tooltip near the cursor
          .style("top", (event.pageY - 28) + "px");
      })
      .on('mouseout', function () {
        if (activeState !== d3.select(this).data()[0].properties.name) { // Don't change fill if active
          d3.select(this).attr('fill', '#ddd');
        }

        // Hide tooltip
        tooltip.transition().duration(200).style("visibility", "hidden");
      })
      .on('click', function (event, d) {
        const clickedStateName = d.properties.name;

        // Clear previous timeout if it exists
        clearTimeout(clickTimerRef.current);

        // Set a timeout to handle single click
        clickTimerRef.current = setTimeout(() => {
          // If state is already active, set it to inactive
          if (activeState === clickedStateName) {
            setActiveState(null);
            setStateClicked(false); // Set clicked state to false
          } else {
            setActiveState(clickedStateName); // Set the clicked state as active
            setStateClicked(true); // Update the stateClicked to true when a state is clicked
          }
          console.log(`Clicked on: ${clickedStateName}`);
        }, 300); // Adjust this delay as necessary (300ms is a common threshold for distinguishing between single and double clicks)

      })
      .on('dblclick', function (event, d) {
        // Clear the timeout for single click action
        clearTimeout(clickTimerRef.current);
        const clickedStateName = d.properties.name;
        
        // Reset the active state and set clicked state to false on double click
        setActiveState(null);
        setStateClicked(false); // Ensure facilities list is hidden
        console.log(`Double clicked on: ${clickedStateName}`);
      });

    return () => {
      clearTimeout(clickTimerRef.current); // Clear timeout on unmount
    };

  }, [activeState, setStateClicked]); // Add activeState to the dependency array

  return (
    <>
      <svg ref={svgRef} width={960} height={600}></svg>
      <div id="tooltip" style={{ position: 'absolute', visibility: 'hidden', background: '#fff', border: '1px solid #ccc', padding: '5px', borderRadius: '3px' }}></div>
    </>
  );
};

export default USAMap;
