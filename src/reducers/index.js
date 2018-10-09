import { combineReducers } from 'redux'
import categories from './categories'
import posts from './posts'
import comments from './comments'
import post from './post'

const rootReducer = combineReducers({ categories, posts, comments, post })

export default rootReducer