import * as API from '../utils/API'

export const LOAD_COMMENTS = 'LOAD_COMMENTS'
export const loadComments = ( comments ) => ({
    type: LOAD_COMMENTS,
    comments
})

export const fetchComments = (postId) => dispatch => (
    API.fetchComments(postId)
        .then(comments => 
            dispatch(loadComments(comments))
        )
)