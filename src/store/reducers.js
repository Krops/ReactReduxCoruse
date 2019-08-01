import {combineReducers} from 'redux';
import PostsReducer from './Reducers/PostsReducers'

export default combineReducers({
    posts: PostsReducer
});