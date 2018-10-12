import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removePost } from '../actions/post'
import { postVote } from '../actions/vote'

class PostControl extends Component {

    deletePost = (postId) => {
        const post = this.props.posts.find(post => post.id === postId)
        this.props.removePost(post)
    }


    render() {
        const { id, voteScore } = this.props.post
        const { history, commentCount, vote, postVote } = this.props
        
        const score = vote[id] ? vote[id] : voteScore
        return (
            <div className='bottom'>
                <div>
                    {score} 
                    <span onClick={() => postVote(id, 'upVote', 'posts')}><i className="far fa-thumbs-up"></i></span>
                    <span onClick={() => postVote(id, 'downVote', 'posts')}><i className="far fa-thumbs-down"></i></span>
                </div>
                <div>{commentCount} comments</div>
                <Link to={`/edit/${id}`}>
                    <i className="far fa-edit">Edit</i>
                </Link>
                <span 
                    onClick={() => {
                        this.deletePost(id)
                        history && history.push('/')
                    }}>
                    <i className="far fa-trash-alt">Delete</i>
                </span>
            </div>
        )
    }
}

const mapStateToProps = ({ posts, vote }) => ({ posts, vote })

export default connect(mapStateToProps, {removePost, postVote})(PostControl)