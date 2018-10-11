import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removePost } from './actions/post'
import { postVote } from './actions/vote'

class PostControl extends Component {

    deletePost = (postId) => {
        const post = this.props.posts.find(post => post.id === postId)
        this.props.removePost(post)
    }

    postVote = (post, option, type) => {
        this.props.postVote(post, option, type)
    }
    
    render() {
        const { voteScore, id } = this.props.post
        const { post, history, commentCount } = this.props
        
        return (
            <div className='bottom'>
                <div>
                    {voteScore} 
                    <span onClick={() => this.postVote(post, 'upVote', 'posts')}><i className="far fa-thumbs-up"></i></span>
                    <span onClick={() => this.postVote(post, 'downVote', 'posts')}><i className="far fa-thumbs-down"></i></span>
                </div>
                <div>{commentCount} comments</div>
                <Link to={`/edit/${id}`}>
                    <i className="far fa-edit">Edit</i>
                </Link>
                <span onClick={() => {
                    this.deletePost(id)
                    history && history.push('/')
                    }}>
                    <i className="far fa-trash-alt">Delete</i>
                </span>
            </div>
        )
    }
}

const mapStateToProps = ({ posts, comments, vote }) => ({ posts, comments, vote })

export default connect(mapStateToProps, {removePost, postVote})(PostControl)