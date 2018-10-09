import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import SideBar from './SideBar'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <SideBar />
        </div>
      </Router>
    );
  }
}

export default App
