import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from './actions/posts'
import { sortPosts } from './actions/sort'
import Post from './Post'

class PostsList extends Component {
    componentDidMount = () => {
      this.props.fetchPosts()
    }

    render() {
        const postsNotDeleted = this.props.posts.filter( post => post.deleted === false)
        const { category } = this.props.match.params 
        // show posts by category 
        const showingPosts = (!category) 
        ? postsNotDeleted
        : postsNotDeleted.filter(post => post.category === category)
        // sort posts by date or score
        const { orderBy, sortBy } = this.props.sort
        const sortedPosts = (orderBy) 
        ? showingPosts.sort((a, b) => a[sortBy] - b[sortBy])
        : showingPosts.sort((a, b) => b[sortBy] - a[sortBy])

        return (
            <div className='board'>
                <div className='sort-control'>
                    <button onClick={()=> this.props.sortPosts(!orderBy, 'timestamp')}>date</button>
                    <button onClick={() => this.props.sortPosts(!orderBy, 'voteScore')}>score</button>
                </div>
                <div className='posts'>
                    { sortedPosts.length === 0 
                    ? <h3>No Post</h3>
                    : sortedPosts.map(post => (
                        <Post post={post} key={post.id}/>
                     ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ posts, sort }) => ({ posts, sort })
export default connect (mapStateToProps, {fetchPosts, sortPosts})(PostsList)