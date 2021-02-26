const initialState = {
    comments : [],
    loading : false
}

const commentsReducer =  (state = initialState, action) => {
    switch(action.type){
        case 'GET_COMMENTS': 
            return {
                ...state,
                comments : action.payload,
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

export default commentsReducer;