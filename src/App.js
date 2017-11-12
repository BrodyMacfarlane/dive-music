import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Landing from './components/landing/landing'
import Dashboard from './components/dash/dash'
import Upload from './components/upload/upload'
import Profile from './components/profile/profile'
import homeIcon from './assets/home-icon.svg'
import barger from './assets/barger.svg'
import { getUserInfo } from './ducks/users'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props){
    super(props)
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
    const user = this.props.user
    console.log(user.auth_id)
    return (
      <HashRouter>
        <div>
          <div className="navspace"></div>
          <div className="navbar">
            <a href="/#/" className="nav-flex">
              <img src={homeIcon} alt="" className="home-icon"/>
            </a>
            <img onClick={this.toggleClass} src={barger} alt="" className="nav-flex barger"/>
            <div className="triangle-svg" id={this.state.toggle ? 'toggle-triangle': null}>
              <svg height="25" width="25">
                <polygon points="12 0, 0 17, 25 17"/>
              </svg>
            </div>
            <div className="menu" id={this.state.toggle ? 'toggle-menu': null}>
              <a onClick={this.toggleClass} href="/#/dashboard">
                <div className="path" id="dash-path">
                  <div className="path-text">DASHBOARD</div>
                </div>
              </a>
              <a onClick={this.toggleClass} href={`/#/profile/${user.auth_id}`}>
                <div className="path" id="profile-path">
                  <div className="path-text">MY PROFILE</div>
                </div>
              </a>
              <a onClick={this.toggleClass} href="/#/upload">
                <div className="path" id="upload-path">
                  <div className="path-text">UPLOAD SONG</div>
                </div>
              </a>
              
            </div>
          </div>
          <Route path='/' component={Landing} exact />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/upload' component={Upload} />
          <Route path='/profile' component={Profile} />
        </div>
      </HashRouter>
    );
  }
}
function mapStateToProps(state) {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps, {getUserInfo})(App);
