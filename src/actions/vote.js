import * as API from '../utils/API'
export const VOTE = 'VOTE'
export const vote = ( id, score ) => ({
    type: VOTE,
    id, 
    score
})

export const postVote = (id, option, type) => dispatch => (
    API.vote(id, option, type)
        .then(item => dispatch(vote(id, item.voteScore)))
)