const initialState = {
    posts: [],
    loading: true
}

const postsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "SET_BLOGS":
            return {
                ...state,
                loading: false,
                posts: action.posts
            }
        default:
            return state
    }
}

export default postsReducer