import {combineReducers} from 'redux';
import { items, itemsHasErrored, itemsIsLoading, redirectToHome } from './Reducers/PostsReducers'
import { reducer as form  } from 'redux-form';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    redirectToHome,
    form
});