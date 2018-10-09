import * as API from '../utils/API'

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'
export const loadCategories = (categories) => ({
    type: LOAD_CATEGORIES,
    categories
})

export const fetchCategories = () => dispatch => (
    API.fetchCategories()
        .then(categories => 
            dispatch(loadCategories(categories))
            )
)