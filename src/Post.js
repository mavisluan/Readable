import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post: {id, category, title, author, timestamp, voteScore, commentCount, children }}) => {
    return (
        <div className='post' >
            <div style={{ fontSize: '20px', fontWeight: 'bold',}}>{category}</div>
            <div className='top'>
                <Link to={`/${category}/${id}`}>
                    <span>
                        {title}
                    </span>
                </Link>
                {children}
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
                <div>{commentCount} comments</div>
                <Link to={`/edit/${id}`}><i className="far fa-edit">Edit</i></Link>
                <span ><i className="far fa-trash-alt"></i>Delete</span>
            </div>
        </div>
    )
} 

export default Post