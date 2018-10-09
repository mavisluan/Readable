import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchComments } from './actions/comments'
import { fetchPost } from './actions/post'

class PostDetails extends Component {
    state ={
        showEdit: false,
        comment: {}
    }

    componentDidMount = () => {
      const { postId } = this.props.match.params
      this.props.fetchPost(postId)
      this.props.fetchComments(postId)
    }
    

    setEdit= ( comment ) => this.setState({ showEdit: true, comment})
    cancelEdit = () => this.setState({ showEdit: false })

    render() {
        const {id, author, title, body, voteScore, timestamp  } = this.props.post
        const { comments } = this.props
        const { showEdit} = this.state

        console.log(this.props)
        const commentsNotDeleted = comments.filter(comment => comment.deleted === false )
        
        return (
            <div>
                <div className='post'>
                    <div className='top'>
                        <div style={{ fontWeight: 'bold',}}>{title}</div>
                        <div>{body}</div>
                    </div>
                    <div className='middle'>
                        written by {author} • {new Date(timestamp).toString().substr(0,21)}
                    </div>
                    <div className='bottom'>
                        <div>
                            {voteScore}
                            <span ><i className="far fa-thumbs-up"></i></span>
                            <span ><i className="far fa-thumbs-down"></i></span>
                        </div>
                        <div>{commentsNotDeleted.length} comments</div>
                        <Link to={`/edit/${id}`}><i className="far fa-edit">Edit</i></Link>
                        <span ><i className="far fa-trash-alt"></i>Delete</span>
                    </div>
                </div>
                <div style={{marginLeft: '30px'}} className='comments'>
                    <h3>Comments</h3>
                    { commentsNotDeleted.length=== 0 
                        ? (
                        <div>
                            <h3>Be the first to comment</h3>
                            <div>CommentForm</div>
                        </div>
                        )      
                        : (
                            <ul>
                                { !showEdit 
                                    ? commentsNotDeleted.map(comment => (
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
                                                    <span ><i className="far fa-thumbs-up"></i></span>
                                                    <span ><i className="far fa-thumbs-down"></i></span>
                                                </div>
                                                <span ><i className="far fa-edit">Edit</i></span>
                                                <span ><i className="far fa-trash-alt"></i>Delete</span>
                                            </div>
                                        </li>                   
                                    ))
                                    : <div>CommentForm</div>
                                }
                                <li>
                                    Add a comment
                                </li>
                                <div>CommentForm</div>
                            </ul>   
                        )  
                    }
                </div>
            </div>
        )
    }
    
} 

const mapStateToProps = ({ comments, post }) => ({ comments, post })

export default connect(mapStateToProps, {fetchComments, fetchPost})(PostDetails)