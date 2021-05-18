import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Download from './components/pages/Download';
import AboutUs from './components/pages/AboutUs';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/download' exact component={Download} />
        <Route path='/about-us' exact component={AboutUs} />
        <Route path='/sign-up' exact component={SignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
