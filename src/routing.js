import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

import MenuContainer from './components/Menu/MenuContainer.jsx';
import HeaderContainer from './components/Menu/HeaderComponent.jsx';
import PostComponent from './components/Posts/PostContainer.jsx';
import PostsComponent from './components/Posts/PostsContainer.jsx';
import AddPostContainer from './components/AddPost/AddPostContainer.jsx';
import UpdatePostContainer from './components/AddPost/UpdatePostContainer.jsx'
import DeletePostComponent from './components/Delete/DeleteComponent.jsx'
const store = configureStore();

export default () => {
  return (
    <Provider store={store}>
      <Router history={customHistory}>
        <div className="grid-container">
          <HeaderContainer />
          <MenuContainer />
          <Switch>
            <Route exact path='/' exact component={PostsComponent} />
            <Route exact path='/post/:postId' component={PostComponent} />
            <Route exact path='/addpost' component={AddPostContainer} />
            <Route exact path='/updatepost/:postId' component={UpdatePostContainer} />
            <Route exact path='/deletepost/:postId' component={DeletePostComponent} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}