import * as API from '../utils/API'

export const LOAD_POST = 'LOAD_POST'
export const loadPost = ( post ) => ({
    type: LOAD_POST,
    post
})

export const fetchPost = (postId) => dispatch => (
    API.fetchAPost(postId)
        .then(post => 
            dispatch(loadPost(post))
        )
)