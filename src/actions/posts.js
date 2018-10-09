import * as API from '../utils/API'

export const LOAD_POSTS = 'LOAD_POSTS'
export const loadPosts = ( posts ) => ({
    type: LOAD_POSTS,
    posts
})

export const fetchPosts = () => dispatch => (
    API.fetchPosts()
        .then(posts => 
            dispatch(loadPosts(posts))
        )
)