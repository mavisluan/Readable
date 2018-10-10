import { combineReducers } from 'redux'
import categories from './categories'
import posts from './posts'
import comments from './comments'
import post from './post'
import sort from './sort'
import vote from './vote'

const rootReducer = combineReducers({ categories, posts, comments, post, sort, vote })

export default rootReducer