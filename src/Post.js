import React from 'react'
import { Link } from 'react-router-dom'
import PostControl from './PostControl'

const Post = ({ post }) => (
    <div className='post' >
        <div style={{ fontSize: '20px', fontWeight: 'bold',}}>{post.category}</div>
        <div className='top'>
            <Link to={`/${post.category}/${post.id}`}>
                <span>
                    {post.title}
                </span>
            </Link>
        </div>
        <div className='middle'>
            written by {post.author} • {new Date(post.timestamp).toString().substr(0,21)}
        </div>
        <PostControl 
            post={post}
        />
    </div>
)


export default Post