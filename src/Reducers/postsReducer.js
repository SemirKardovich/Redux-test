const initialState = {
    posts : [],
    loading : false
}

const postsReducer =  (state = initialState, action) => {
    switch(action.type){
        case 'GET_POSTS': 
            return {
                ...state,
                posts : action.payload,
                loading: false
            };
        case 'SET_LOADING' : 
            return {
                ...state,
                loading : true
            }
        default: return state;
    }
}

export default postsReducer;