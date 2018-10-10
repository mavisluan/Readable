import { LOAD_POSTS } from '../actions/posts'
import { LOAD_NEW_POST, DELETE_POST } from '../actions/post'

const posts = ( state = [], action ) => {
    const { posts, post } = action 
    switch (action.type) {
        case LOAD_POSTS:
            return posts
        case LOAD_NEW_POST:
            return [
                ...state, post
            ]
        case DELETE_POST:
            return state.filter( p => p.id !== post.id)
        default:
            return state
    }
}

export default posts