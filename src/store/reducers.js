import {combineReducers} from 'redux';
import { items, itemsHasErrored, itemsIsLoading, redirectToHome, accountIsAuthorized } from './Reducers/PostsReducers'
import { reducer as form  } from 'redux-form';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    redirectToHome,
    accountIsAuthorized,
    form
});