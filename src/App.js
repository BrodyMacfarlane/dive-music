import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Login from './components/login/login'
import Dashboard from './components/dash/dash'
import Upload from './components/upload/upload'
import homeIcon from './assets/home-icon.svg'
import barger from './assets/barger.svg'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="navbar">
            <a href="/#/" className="nav-flex">
              <img src={homeIcon} alt="" className="home-icon"/>
            </a>
            <img src={barger} alt="" className="nav-flex barger"/>
          </div>
          <Route path='/' component={Login} exact />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/upload' component={Upload} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
