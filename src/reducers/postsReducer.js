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
        case "SET_POSTS":
            return {
                ...state,
                loading: false,
                posts: action.posts
            }
        case "ADD_POST":
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
        default:
            return state
    }
}

export default postsReducer