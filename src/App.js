import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SideBar from './SideBar'
import PostsList from './PostsList'
import PostDetails from './PostDetails'
import PostForm from './PostForm'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <SideBar />
          <Switch>
            <Route exact path='/' component={PostsList}/>
            <Route exact path='/new' component={PostForm} />
            <Route path='/edit/:postId' component={PostForm} />
            <Route exact path='/:category' component={PostsList}/>
            <Route exact path='/:category/:postId' component={PostDetails}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
