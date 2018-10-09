import { LOAD_COMMENTS } from '../actions/comments'

const comments = ( state = [], action ) => {
    const { comments } = action 
    switch( action.type ) {
        case LOAD_COMMENTS:
            return comments
        default: 
            return state
    }
}

export default comments