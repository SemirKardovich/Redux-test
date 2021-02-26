const initialState = {
    users : [],
    loading : false
}

const usersReducer =  (state = initialState, action) => {
    switch(action.type){
        case 'GET_USERS': 
            return {
                ...state,
                users : action.payload,
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

export default usersReducer;