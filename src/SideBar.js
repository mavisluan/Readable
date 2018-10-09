import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from './actions/categories'
import { Link } from 'react-router-dom'

class SideBar extends Component {
    componentDidMount() {
        this.props.fetchCategories()
      }
    
    render() {
        const { categories } = this.props

        return (
            <div className='side-bar'>
                <Link to='/' >All categories</Link>
                <ul>
                    {categories && categories.map(category => (
                        <li key={category.name} >
                            <Link to={`/${category.name}`}>
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul> 
                    <Link to='/new'>New Post</Link>
            </div>
        )
    }
}

const mapStateToProps = ( {categories} ) => ({ categories})
export default connect(mapStateToProps, {fetchCategories})(SideBar);