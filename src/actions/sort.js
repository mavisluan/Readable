export const SORT = 'SORT'
export const sortPosts = ( orderBy, sortBy ) => ({
    type: SORT,
    orderBy,
    sortBy,
})