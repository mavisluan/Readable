import * as API from '../utils/API'
export const VOTE = 'VOTE'
export const vote = ( item, score ) => ({
    type: VOTE,
    item, 
    score
})

export const postVote = (item, option, type) => dispatch => (
    API.vote(item.id, option, type)
        .then(item => dispatch(vote(item, item.voteScore)))
)