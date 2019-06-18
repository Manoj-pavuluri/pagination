
const PostReducers = (state = {}, action) => {
    switch (action.type) {
        case 'GET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'GET_SUBJECTS':
            return {
                ...state,
                manoj: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default PostReducers;