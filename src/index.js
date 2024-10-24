import React from 'react'
import ReactDOM from 'react-dom'
// import EventComponentPage from './views/events'
import Event from './views/events'
import AboutPage from './views/aboutus'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import NotFound from './views/not-found'
import GroupChat from './views/community'
import CommunityPage from './views/communityHome'
import FacilitiesPage from './views/Facilities'
import SportFacilitiesListPage from './views/FacilitiesList'
import MarketplacePage from './views/Marketplace'
import Login from './views/login'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Event} path = "/events"/>
        <Route component = {GroupChat} path = "/community"/>
        <Route component = {CommunityPage} path = "/community-home"/>
        <Route component = {FacilitiesPage} path ='/facilities'/>
        <Route component = {SportFacilitiesListPage} path = '/facilities-list'/>
        <Route component = {MarketplacePage} path = '/marketplace'/>
        <Route component = {AboutPage} path = '/aboutus'/>
        <Route component = {Login} path = '/login'/>


        <Route component={NotFound} path="**" />
        {/* <Redirect to="**" /> */}
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
