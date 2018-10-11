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

export const LOAD_COMMENT = 'LOAD_COMMENT'
export const loadComment = (comment) => ({
    type: LOAD_COMMENT,
    comment
})

export const fetchComment = (commentId) => dispatch => (
    API.fetchAComment(commentId)
        .then(comment => dispatch(loadComment(comment)))
)

export const updateComment = (comment) => dispatch => (
    API.updateComment(comment)
        .then(comment => dispatch(loadComment(comment)))
)

export const LOAD_NEW_COMMENT = 'LOAD_NEW_COMMENT'
export const loadNewComment = (comment) => ({
    type: LOAD_NEW_COMMENT,
    comment
})
export const addComment = ( comment ) => dispatch => (
    API.addComment(comment)
        .then(comment => dispatch(loadNewComment(comment)))
)

export const DELETE_COMMENT = 'DELETE_COMMENT'
export const deleteComment = (comment) => ({
    type: DELETE_COMMENT,
    comment
})

export const removeComment = (comment) => dispatch => (
    API.deleteComment(comment.id)
        .then(dispatch( deleteComment(comment)))
)

