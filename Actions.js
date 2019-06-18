
export const getPosts = () => {
    return dispatch => {
        dispatch({
            type: "GET_LOADING"
        });
        fetch('https://api.stag.talentscreen.io/v1/subjects?limit=1')
            .then(data => data.json())
            .then(res => {
                dispatch({
                    type: "GET_SUBJECTS",
                    payload: res
                })
            })
    }
}