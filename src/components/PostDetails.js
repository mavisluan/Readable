import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../actions/comments'
import { fetchPost } from '../actions/post'
import { fetchPosts } from '../actions/posts'
import CommentsList from './CommentsList'
import CommentForm from './CommentForm'
import PostControl from  './PostControl'

class PostDetails extends Component { 
    componentDidMount = () => {
      const { postId } = this.props.match.params
      this.props.fetchPost(postId)
      this.props.fetchComments(postId)
      this.props.fetchPosts()
    }   

    render() { 
        const { post, comments, history } = this.props     
        const {id, author, title, body, timestamp } = post
        const commentsNotDeleted = comments.filter(comment => comment.deleted === false )
        
        return (
            <div>
                <div className='post'>
                    <div className='top'>
                        <div style={{ fontWeight: 'bold' }}>{title}</div>
                        <div>{body}</div>
                    </div>
                    <div className='middle'>
                        written by {author} • {new Date(timestamp).toString().substr(0,21)}
                    </div>
                    <PostControl 
                        post={post}
                        commentCount={commentsNotDeleted.length}
                        history={history}
                    />
                </div>
                {commentsNotDeleted.length === 0 
                    ? <CommentForm parentId={id} />
                    : <CommentsList 
                        parentId={id} 
                        comments={commentsNotDeleted}
                    />
                }
            </div>
        )
    }
    
} 

const mapStateToProps = ({  post, comments }) => ({ post, comments })

export default connect(mapStateToProps, {fetchComments, fetchPost, fetchPosts })(PostDetails)