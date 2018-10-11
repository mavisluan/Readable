import { LOAD_COMMENTS, LOAD_NEW_COMMENT, LOAD_COMMENT, DELETE_COMMENT } from '../actions/comments'
import { VOTE } from '../actions/vote'

const comments = ( state = [], action ) => {
    const { comments, comment, item, score } = action 
    switch( action.type ) {
        case LOAD_COMMENTS:
            return comments
        case LOAD_NEW_COMMENT:
            return [...state, comment]
        case LOAD_COMMENT:
            const newState = state.filter(c => c.id !== comment.id)
            return [ ...newState, comment]
        case DELETE_COMMENT:
            return state.filter(c => c.id !== comment.id)
        case VOTE:
            return state.map( c => {
                if (c.id === item.id) {
                    c.voteScore = score
                }
                return c
            })
        default: 
            return state
    }
}

export default comments