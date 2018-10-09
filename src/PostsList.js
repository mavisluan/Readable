import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from './actions/posts'
import Post from './Post'

class PostsList extends Component {
    componentDidMount = () => {
      this.props.fetchPosts()
    }
    
    render() {
        const postsNotDeleted = this.props.posts.filter( post => post.deleted === false)
        const { category } = this.props.match.params  
        const categoryPosts = (!category) 
        ? postsNotDeleted
        : postsNotDeleted.filter(post => post.category === category)

        return (
            <div className='board'>
                <div className='sort-control'>
                <button>date</button>
                <button>score</button>
                </div>
                <div className='posts'>
                    { categoryPosts.length === 0 
                    ? <h3>No Post</h3>
                    : categoryPosts.map(post => (
                        <Post post={post} key={post.id}/>
                     ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ posts }) => ({ posts })
export default connect (mapStateToProps, {fetchPosts})(PostsList)