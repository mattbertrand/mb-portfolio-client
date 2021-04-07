export const getPosts = () => {
    return dispatch => {
        dispatch({ type: "LOADING"})
        fetch("http://localhost:3001/posts")
        .then(resp => resp.json())
        .then(posts => dispatch({ type: "SET_POSTS", posts }))
    }
}