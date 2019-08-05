import React from 'react';
import {Router, Route} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

import MainComponent from './components/MainComponent.jsx';
import PostComponent from './components/Post/PostComponent.jsx';

export default () => {
  return (
    <Provider store={store}>
      <Router history={customHistory}>
      <Route exact path='/' component={MainComponent}/>
      <Route exact path='/post/:postId' component={PostComponent}/>
      </Router>
    </Provider>
  )
}