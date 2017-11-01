import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Login from './components/login/login'
import Dashboard from './components/dash/dash'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path='/' component={Login} exact />
          <Route path='/dashboard' component={Dashboard} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
