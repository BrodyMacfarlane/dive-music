import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Landing from './components/landing/landing'
import Dashboard from './components/dash/dash'
import Upload from './components/upload/upload'
import homeIcon from './assets/home-icon.svg'
import barger from './assets/barger.svg'

class App extends Component {
  constructor(){
    super()
    this.toggleClass = this.toggleClass.bind(this)
    this.state = {
      toggle: false
    }
  }
  toggleClass() {
    const isToggled = this.state.toggle;
    this.setState({ toggle: !isToggled });
  }
  render() {
    return (
      <HashRouter>
        <div>
          <div className="navbar">
            <a href="/#/" className="nav-flex">
              <img src={homeIcon} alt="" className="home-icon"/>
            </a>
            <img onClick={this.toggleClass} src={barger} alt="" className="nav-flex barger"/>
            <div className="triangle-svg" id={this.state.toggle ? 'toggle': null}>
              <svg height="25" width="25">
                <polygon points="12 0, 0 17, 25 17"/>
              </svg>
            </div>
          </div>
          <Route path='/' component={Landing} exact />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/upload' component={Upload} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
