import React, { Component } from 'react'

class CommentControl extends Component {
    render() {
        return (
            <div className='bottom'>
                <div>
                    {comment.voteScore}
                    <span ><i className="far fa-thumbs-up"></i></span>
                    <span ><i className="far fa-thumbs-down"></i></span>
                </div>
                <span onClick={()=> this.setEdit(comment)}><i className="far fa-edit">Edit</i></span>
                <span ><i className="far fa-trash-alt"></i>Delete</span>
            </div>
        )
    }
}

export default CommentControl