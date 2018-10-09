import { combineReducers } from 'redux'
import categories from './categories'
import posts from './posts'
import comments from './comments'
import post from './post'
import sort from './sort'

const rootReducer = combineReducers({ categories, posts, comments, post, sort })

export default rootReducer