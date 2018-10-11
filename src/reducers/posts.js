import { LOAD_POSTS } from '../actions/posts'
import { LOAD_NEW_POST, DELETE_POST } from '../actions/post'
import { VOTE } from '../actions/vote'

const posts = ( state = [], action ) => {
    const { posts, post, item, score } = action 
    switch (action.type) {
        case LOAD_POSTS:
            return posts
        case LOAD_NEW_POST:
            return [...state, post]
        case DELETE_POST:
            return state.filter( p => p.id !== post.id)
        case VOTE:
            return state.map( p => {
                if (p.id === item.id) {
                    p.voteScore = score
                }
                return p
            })
        default:
            return state
    }
}

export default posts