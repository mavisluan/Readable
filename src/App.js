import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchCategories } from './actions/categories'

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories()
  }
  
  render() {
    console.log(this.props.categories)

    return (
      <div className="App">
     
      </div>
    );
  }
}

const mapStateToProps = ( {categories} ) => ({ categories})
export default connect(mapStateToProps, {fetchCategories})(App);
