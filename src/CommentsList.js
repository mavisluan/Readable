import React, { Component } from 'react'
import CommentForm from './CommentForm'
import { connect } from 'react-redux'
import { removeComment } from './actions/comments'

class CommentsList extends Component {
    state ={
        showEdit: false,
        comment: {}
    }

    setEdit= ( comment ) => this.setState({ showEdit: true, comment})
    cancelEdit = () => this.setState({ showEdit: false })

    render() {
        const { comments, parentId, removeComment } = this.props
        const { showEdit, comment} = this.state
        return (
            <div style={{marginLeft: '30px'}} className='comments'>
                <h3>Comments</h3>
                <ul>
                    { !showEdit ? 
                        comments.map(comment => (
                            <li key={comment.id}>
                                <div className='top'>
                                    <div>{comment.body}</div>
                                </div>
                                <div className='middle'>
                                    written by {comment.author} • {new Date(comment.timestamp).toString().substr(0,21)}
                                </div>
                                <div className='bottom'>
                                    <div>
                                        {comment.voteScore}
                                        <span><i className="far fa-thumbs-up"></i></span>
                                        <span><i className="far fa-thumbs-down"></i></span>
                                    </div>
                                    <span onClick={()=> this.setEdit(comment)}><i className="far fa-edit">Edit</i></span>
                                    <span onClick={() => removeComment(comment)}><i className="far fa-trash-alt"></i>Delete</span>
                                </div>
                            </li>                   
                        )): 
                        <CommentForm 
                            comment={comment}
                            parentId={parentId} 
                            hideEdit={this.cancelEdit}>
                            <button onClick={() => this.cancelEdit()}>Cancel</button> 
                        </CommentForm>
                    }
                    <CommentForm parentId={parentId} />
                </ul>   
            </div>
        )
    }
}


const mapStateToProps = ({ post, comments }) => ({  post, comments  })

export default connect(mapStateToProps, { removeComment,  })(CommentsList)