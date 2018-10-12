import React, { Component } from 'react'
import CommentForm from './CommentForm'
import CommentControl from './CommentControl'
import { connect } from 'react-redux'

class CommentsList extends Component {
    state ={
        showEdit: false,
        comment: {}
    }

    setEdit= ( comment ) => this.setState({ showEdit: true, comment})
    cancelEdit = () => this.setState({ showEdit: false })

    render() {
        const { comments, parentId } = this.props
        const { showEdit, comment} = this.state
        return (
            <div style={{marginLeft: '30px'}} className='comments'>
                <h3>Comments</h3>
                <ul>
                    { !showEdit 
                      ? comments.map(comment => (
                            <li key={comment.id}>
                                <div className='top'>
                                    <div>{comment.body}</div>
                                </div>
                                <div className='middle'>
                                    written by {comment.author} • {new Date(comment.timestamp).toString().substr(0,21)}
                                </div>
                                <CommentControl 
                                    setEdit={this.setEdit}
                                    comment={comment}
                                />
                            </li>                   
                        )) 
                        : <CommentForm 
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


const mapStateToProps = ({ comments }) => ({ comments })

export default connect(mapStateToProps)(CommentsList)