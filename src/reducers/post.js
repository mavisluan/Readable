import { LOAD_POST } from '../actions/post'

const post = ( state = {}, action ) => {
    const { post } = action 
    switch( action.type ) {
        case LOAD_POST:
            return post
        default:
            return state
    }
}

export default post