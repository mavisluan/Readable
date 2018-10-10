import { VOTE } from '../actions/vote'

const vote = (state = {}, action ) => {
    const { id, score} = action 
    switch(action.type) {
        case VOTE:
            return { id, score}
        default:
            return state
    }
}

export default vote