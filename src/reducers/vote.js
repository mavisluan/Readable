import { VOTE } from '../actions/vote'

const vote = (state = {}, action ) => {
    const { item, score } = action 
    switch(action.type) {
        case VOTE:
            return { ...item, score }
        default:
            return state
    }
}

export default vote