const url = 'http://localhost:3001'

let token = localStorage.token
if(!token) {
    token = localStorage.token = 
    Math.random().toString(36).substr(-8)
}

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token
}

// CATEGORIES
export const fetchCategories = () => 
    fetch(`${url}/categories`, { headers })
      .then(res => res.json())
      .then(data => data.categories)

  
// POSTS

// -- by all
export const fetchPosts = () => 
    fetch(`${url}/posts`, { headers })
      .then(res => res.json())
      .then(data => data)

  

// -- by category
export const fetchCategoryPosts = (category) => 
    fetch(`${url}/${category}/posts`, { headers })
      .then(res => res.json())
      .then(data => data)

  
// ONE POST
const post = { 
    id: 'uekghi184840w4r3',
    body: 'this is a new post',
    author: 'new user',
    title: 'new post'
}

// --ADD New
export const addPost = (post) => {
    const postData = {
        ...post,
        timestamp: Date.now()
    }

    return fetch(`${url}/posts`, { 
        method: 'POST', 
        headers,
        body: JSON.stringify(postData)
    }).then(res => res.json())
        .then(data => data)
}

// --GET by id
export const fetchAPost = (id) => 
    fetch(`${url}/posts/${id}`, { headers })
        .then( res => res.json())
        .then( post => post )



// DELETE A Post
export const deletePost = (postId) => 
    fetch(`${url}/posts/${postId}`, { 
        method: 'DELETE', 
        headers,
    })


// EDIT A Post
export const updatePost = (post) => {
    const postData = {
        ...post,
        timestamp: Date.now()
    }
    return fetch(`${url}/posts/${post.id}`, { 
        method: 'PUT', 
        headers,
        body: JSON.stringify(postData)
    }).then(res => res.json())
        .then(data => data)
}

// COMMENTS
// -- Get One post's comments
export const fetchComments = (postId) => 
    fetch(`${url}/posts/${postId}/comments`, {headers})
        .then(res => res.json())
        .then(data => data)

export const addComment = (comment) => {
    const commentData = {
        ...comment,
        timestamp: Date.now()
    }
    return fetch(`${url}/comments`, {
            method: 'POST',
            headers,
            body: JSON.stringify(commentData)
        }).then(res => res.json())
            .then(comment => comment) 
}

// --get ONE Comment by id
export const fetchAComment = ( commentId ) => 
    fetch(`${url}/comments/${commentId}`, { headers})
        .then(res => res.json())
        .then(comment => comment) 



// -- Edit ONE comment
export const updateComment = (comment ) => {
    const commentData = {
        ...post,
        timestamp: Date.now()
    }
    return fetch(`${url}/comments/${comment.id}`, { 
        method: 'PUT', 
        headers,
        body: JSON.stringify(commentData)
    }).then(res => res.json())
        .then(data => data)
}

// -- DELETE ONE comment
export const deleteComment = (commentId) => 
    fetch(`${url}/comments/${commentId}`, { 
        method: 'DELETE',
        headers
    })


// VOTE for a post/comment
export const vote = ( id, option, type ) => {
    const postData = { id, option }
    return fetch(`${url}/${type}/${id}`, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers
    }).then(res => res.json())
        .then(data => data)
}
