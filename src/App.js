import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SideBar from './SideBar'
import PostsList from './PostsList'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <SideBar />
          <Switch>
            <Route exact path='/' component={PostsList}/>
            <Route path='/:category' component={PostsList}/>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
