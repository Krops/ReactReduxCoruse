import './styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import MainComponent from './components/MainComponent.jsx';
import { mainReduser} from './store/reducers'

export const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME';
export const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME';

//import Routes from './routes';



const store = createStore(mainReduser);

console.log(store.getState());


ReactDOM.render(
  <Provider store={store}>
    <MainComponent />
  </Provider>
  , document.getElementById('app')
);
