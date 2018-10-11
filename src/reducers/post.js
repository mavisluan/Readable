import { LOAD_POST, DELETE_POST } from '../actions/post'
import { VOTE } from '../actions/vote'

const post = ( state = {}, action ) => {
    const { post, item, score } = action 
    switch( action.type ) {
        case LOAD_POST:
            return post
        case DELETE_POST:
            return { ...post, deleted: true}
        case VOTE:
            return { ...item, voteScore: score}
        default:
            return state
    }
}

export default post