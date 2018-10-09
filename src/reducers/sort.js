import { SORT } from '../actions/sort'

const sortPosts = ( state = { }, action ) => {
    const { orderBy, sortBy } = action 
    switch(action.type) {
        case SORT:
            return {
                ...state,
                orderBy, 
                sortBy
            }
        default:
            return state
    }
}

export default sortPosts