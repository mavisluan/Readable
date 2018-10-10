import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost, updatePost } from './actions/post'
import serializeForm from 'form-serialize'

class PostForm extends Component {
    state = {
        author: '',
        title: '',
        body: '',
        category: 'react'
    }
    
    updateState = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
 
    clearState = () => this.setState({ 
        author: '',
        title: '',
        body: '',
        category: ''
    })

    componentDidMount() {
        const { postId } = this.props.match.params   
        const post = this.props.posts.find(post => post.id === postId)
        if (post) {
            const { author, title, body, category} = post
            this.setState({ author, title, body, category})
        } 
    }

    addPost = (e) => {
        e.preventDefault()
        let post = serializeForm( e.target, { hash: true })
        post =  { ...post, ...this.createPost()}
        this.props.addPost(post)
    }

    createPost = () => {
        const uuid = require('uuid/v1')
        const id = uuid()
        const voteScore = 0
        const deleted = false
        const commentCount = 0
        const timestamp = Date.now()
        return ({ id, voteScore, deleted, commentCount, timestamp })
    }

    updatePost = ( e, postId) => {
        e.preventDefault()
        const object = serializeForm( e.target, { hash: true })
        let post = this.props.posts.find(post => post.id === postId)
        post = { ...post, ...object, timestamp: Date.now()}
        this.props.updatePost(post)   
    }

    render() {
        const { categories, history} = this.props
        const { author, title, body, category } = this.state
        const { postId } = this.props.match.params

        const onSubmit = (postId) 
            ? (e) => this.updatePost(e, postId)
            : (e) => this.addPost(e)
        const header = postId ? 'Edit Post' : 'New Post'
        const button = postId ? 'save' : 'submit' 

        return (
            <div className='new-post'>
                <h2>{header}</h2>
                <form 
                    onSubmit={(e) => {
                        onSubmit(e) 
                        this.clearState()
                        history.push(`/${category}`) 
                    }}
                    autoComplete="off">
                    <div>
                        <span>Name</span>
                        <input 
                            name='author'
                            value={author}
                            onChange={this.updateState}
                            type='text' 
                            placeholder='Enter your name'
                            required
                        />
                    </div> 
                    <div>
                        <span>Post title </span>
                        <input 
                            name='title' 
                            value={title}
                            onChange={this.updateState}
                            type='text' 
                            placeholder='Enter here'
                            required
                        />
                    </div>
                    <div>
                        <span>Content</span>
                        <input 
                            name='body'
                            value={body}
                            onChange={this.updateState}
                            type='text' 
                            placeholder='Enter here'
                            required
                        />
                    </div> 
                    <div>
                        <span>Category</span>
                        <select 
                            name='category' 
                            value={category}
                            onChange={this.updateState} 
                            required
                        >   
                            {categories.map(category => (
                                <option key={category.name} value={category.name}>
                                    {category.name}
                                </option>
                            ))}
                        </select> 
                        <button>{button}</button>
                    </div> 
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ categories, posts }) => ({ categories, posts })

export default connect(mapStateToProps, { addPost, updatePost })(PostForm)