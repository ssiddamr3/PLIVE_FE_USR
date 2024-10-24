import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';




import './navbar.css'

const LNavbar = (props) => {
  const history = useHistory();
  return (
    <header className={`navbar-navbar ${props.rootClassName} `}>
      <span
        className="navbar-branding-logo" onClick={() => history.push('/')}> P L I V E
        </span>
      <div className="navbar-nav-content">
        <div className="navbar-nav-links1">
        {/* <span className="navbar-link1 nav-link" onClick={() => navigate('/events')}>Events</span> */}
        {/* <span className="navbar-link1 nav-link" onClick={() => history.push('/events')}>Events</span>
          <span className="nav-link" onClick={() => history.push('/facilities')}>Facilities</span>
          <span className="nav-link" onClick={() => history.push('/community-home')}>Community</span>
          <span className="nav-link" onClick={() => history.push('/marketplace')}>Marketplace</span>
          <span className="nav-link" onClick={() => history.push('/aboutus')}>About us</span> */}
        </div>
        <div className="get-started navbar-get-started1">
          <span className="navbar-text1">Get started</span>
        </div>
        {/* <div id="open-mobile-menu" className="navbar-hamburger get-started">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="navbar-image1"
          />
        </div> */}
      </div>
      <div id="mobile-menu" className="navbar-mobile-menu">
        <div className="navbar-branding">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="navbar-image2"
          />
          <div id="close-mobile-menu" className="navbar-container1">
            <svg viewBox="0 0 1024 1024" className="navbar-icon1">
              <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
        </div>
        <div className="navbar-nav-links2">
          <span className="nav-link">Features</span>
          <span className="nav-link">Why us</span>
          <span className="nav-link">Prices</span>
          <span className="nav-link">Contact</span>
        </div>
        <div className="get-started">
          <span className="navbar-text2">Get started</span>
        </div>
      </div>
      <div>
        <div className="navbar-container3">
        <Script
  html={`<script defer>
    (function() {
      if (!window.mobileMenuInitialized) {
        window.mobileMenuInitialized = true;
        
        const listenForUrlChangesMobileMenu = () => {
          let url = location.href;
          document.body.addEventListener(
            'click',
            () => {
              requestAnimationFrame(() => {
                if (url !== location.href) {
                  runMobileMenuCodeEmbed();
                  url = location.href;
                }
              });
            },
            true
          );
        };
        
        const runMobileMenuCodeEmbed = () => {
          const mobileMenu = document.querySelector("#mobile-menu");
          const closeButton = document.querySelector("#close-mobile-menu");
          const openButton = document.querySelector("#open-mobile-menu");
        
          openButton &&
            openButton.addEventListener('click', function() {
              mobileMenu.style.transform = "translateX(0%)";
            });
        
          closeButton &&
            closeButton.addEventListener('click', function() {
              mobileMenu.style.transform = "translateX(100%)";
            });
        };
        
        runMobileMenuCodeEmbed();
        listenForUrlChangesMobileMenu();
      }
    })();
  </script>`}
/>

        </div>
      </div>
    </header>
  )
}

LNavbar.defaultProps = {
  imageAlt: 'image',
  imageSrc1: '/Branding/planical7012-ttpb.svg',
  imageSrc: '/Icons/hamburger-200h.png',
  imageAlt1: 'image',
  rootClassName: '',
  brandingLogo: '/Branding/planical7012-wzf.svg',
}

LNavbar.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt1: PropTypes.string,
  rootClassName: PropTypes.string,
  brandingLogo: PropTypes.string,
}

export default LNavbar
