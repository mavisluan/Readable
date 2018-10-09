import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchCategories } from './actions/categories'

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories()
  }
  
  render() {
    const { categories } = this.props
    return (
      <div >
        {categories && categories.map(category => (
          <li key={category.path}>
            {category.name}
          </li>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ( {categories} ) => ({ categories})
export default connect(mapStateToProps, {fetchCategories})(App);
