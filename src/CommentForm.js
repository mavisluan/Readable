import React, { Component } from 'react'
import serializeForm from 'form-serialize'
import { addComment, updateComment } from './actions/comments'
import { connect } from 'react-redux'

class CommentForm extends Component {
    state = {
        author: '',
        body: '',
    }

    updateState= (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    clearState = () => this.setState({
        author: '',
        body: '',
    })

    componentDidMount() {
        const { comment } = this.props
        if (comment) { 
            const { author, body } = comment
            this.setState({ author, body })
        }
    }
    
    addComment = (e, parentId) => {
        e.preventDefault()
        let comment = serializeForm( e.target, { hash: true })
        comment =  { ...comment, ...this.createComment(parentId)}
        this.props.addComment(comment)
      }

    createComment = (parentId) => {
        const uuid = require('uuid/v1')
        const id = uuid()
        const deleted = false
        const parentDeleted = false
        const voteScore = 0
        const timestamp = Date.now()
        return ({ id, parentId, deleted, parentDeleted, voteScore, timestamp })
    }

    updateComment = (e, comment) => {
        e.preventDefault()
        const object = serializeForm( e.target, { hash: true })
        comment = { ...comment, ...object, timestamp: Date.now()}
        this.props.updateComment(comment)
    }

    render() {
        const { author, body  } = this.state
        const { parentId, hideEdit, comment } = this.props
        // if a comment is selected, then call update function. Otherwise, create a new comment.
        const onSubmit = (comment) 
            ? (e) => { 
                this.updateComment(e, comment) 
                hideEdit()
            }
            : (e) => {
                this.addComment(e, parentId) 
                this.clearState()
            }

        return (
            <div>
                <h3>Add a comment</h3>
                <form 
                    className='new-comment' 
                    onSubmit={onSubmit}
                    autoComplete="off">
                    <input 
                        className='name' 
                        type='text' 
                        placeholder='Your Name'
                        name='author'
                        value={author}
                        onChange={this.updateState}
                    />
                    <textarea 
                        className='comment'
                        type='text' 
                        placeholder='Your comments'
                        rows='4'
                        name='body'
                        value={body}
                        onChange={this.updateState}
                    />
                    <div className='comment-buttons'>
                        <button type='submit'>Submit</button>  
                        {this.props.children} 
                    </div>        
                </form>
            </div>
            
        )
    }
} 

const mapStateToProps = ({ comments }) => ({ comments})
export default connect( mapStateToProps, { addComment, updateComment })(CommentForm)