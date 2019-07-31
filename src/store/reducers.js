import {combineReducers} from 'redux';
import {MenuReducer} from './Reducers/MenuReducer'

export default combineReducers({
    menu: MenuReducer
});