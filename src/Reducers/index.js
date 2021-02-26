import {combineReducers} from 'redux'
import postsReducer from './postsReducer'
import commentsReducer from './commentsReducer'
import usersReducer from './usersReducer'
import photosReducer from './photosReducer'

export default combineReducers({
    posts : postsReducer,
    comments : commentsReducer,
    users : usersReducer,
    photos : photosReducer
});