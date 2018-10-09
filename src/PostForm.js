import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostForm extends Component {
    state = {
        author: '',
        title: '',
        body: '',
        category: 'react'
    }

    componentDidMount() {
        const { postId } = this.props.match.params   
        const post = this.props.posts.find(post => post.id === postId)
        if (post) {
            const { author, title, body, category} = post
            this.setState({ author, title, body, category})
        } 
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
 

    render() {
        const { categories, onAddPost, onUpdatePost, history} = this.props
        const { author, title, body, category } = this.state
        const { postId } = this.props.match.params

        const onSubmit = (postId) 
            ? (e) => onUpdatePost(e, postId)
            : (e) => onAddPost(e)

        console.log(this.props.match.params)
        console.log(this.props.posts)
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

export default connect(mapStateToProps)(PostForm)