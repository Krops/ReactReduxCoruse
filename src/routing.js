import React from 'react';
import {Router, Route} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';
import { createBrowserHistory } from "history";
import {retrievePosts} from "./store/Reducers/PostsReducers"

const customHistory = createBrowserHistory();

import PostsContainer from './components/Posts/PostsContainer.jsx';


const onAppEnter = () => {
    console.log("ridfsdfsdf")
    store.dispatch(retrievePosts())
}

export default () => {
  return (
    <Provider store={store}>
      <Router history={customHistory}>
        <Route path='/' component={PostsContainer}>
        </Route>
      </Router>
    </Provider>
  )
}