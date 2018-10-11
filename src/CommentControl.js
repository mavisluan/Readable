import React, { Component } from 'react'
import { postVote } from './actions/vote'
import { removeComment } from './actions/comments'
import { connect } from 'react-redux'

class CommentControl extends Component {


    render() {
        const { setEdit, comment, removeComment,  postVote } = this.props
        return (
            <div className='bottom'>
                <div>
                    {comment.voteScore}
                    <span onClick={() => postVote(comment, 'upVote', 'comments')}><i className="far fa-thumbs-up"></i></span>
                    <span><i className="far fa-thumbs-down"></i></span>
                </div>
                <span onClick={()=> setEdit(comment)}><i className="far fa-edit">Edit</i></span>
                <span onClick={() => removeComment(comment)}><i className="far fa-trash-alt"></i>Delete</span>
            </div>
        )
    }
}


const mapStateToProps = ({ comments }) => ({ comments })

export default connect(mapStateToProps, { removeComment, postVote })(CommentControl)