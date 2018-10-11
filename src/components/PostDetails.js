import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../actions/comments'
import { fetchPost } from '../actions/post'
import CommentsList from './CommentsList'
import CommentForm from './CommentForm'
import PostControl from  './PostControl'

class PostDetails extends Component { 
    componentDidMount = () => {
      const { postId } = this.props.match.params
      this.props.fetchPost(postId)
      this.props.fetchComments(postId)
    }   

    render() {      
        const {id, author, title, body, timestamp } = this.props.post
        const commentsNotDeleted = this.props.comments.filter(comment => comment.deleted === false )
        
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
                    <PostControl 
                        post={this.props.post}
                        commentCount={commentsNotDeleted.length}
                        history={this.props.history}
                    />
                </div>
                {commentsNotDeleted.length === 0 
                    ? <CommentForm parentId={id} />
                    : <CommentsList parentId={id} comments={commentsNotDeleted}/>
                }
            </div>
        )
    }
    
} 

const mapStateToProps = ({  post, comments }) => ({ post, comments })

export default connect(mapStateToProps, {fetchComments, fetchPost })(PostDetails)