export const getPosts = () => {
    return dispatch => {
        dispatch({ type: "LOADING"})
        fetch("http://localhost:3001/posts")
        .then(resp => resp.json())
        .then(posts => dispatch({ type: "SET_POSTS", posts }))
    }
}

export const addPost = (post, history) => {
    return dispatch => {
        fetch("http://localhost:3001/posts", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ post })
        })
        .then(resp => resp.json())
        .then(post => {
            dispatch({ type: "ADD_POST", post })
            history.push("/posts")
        })
    }
}