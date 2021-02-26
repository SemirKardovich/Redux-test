const initialState = {
    photos : [],
    loading : false
}

const photosReducer =  (state = initialState, action) => {
    switch(action.type){
        case 'GET_PHOTOS': 
            return {
                ...state,
                photos : action.payload,
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

export default photosReducer;