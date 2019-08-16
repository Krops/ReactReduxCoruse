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
import LoginContainer from './components/Login/LoginContainer.jsx'
import LogoutContainer from './components/Login/LogoutContainer.jsx'
import { Redirect } from 'react-router-dom'
const store = configureStore();

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
  <Route {...rest} render={props => (
    localStorage.getItem("token")
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />);
}
  
  


export default () => {
  return (
    <Provider store={store}>
      <Router history={customHistory}>
        <div className="grid-container">
          <HeaderContainer />
          <MenuContainer />
          <Switch>
            <Route exact path='/login' exact component={LoginContainer} />
            <Route exact path='/logout' exact component={LogoutContainer} />
            <PrivateRoute component={PostsComponent} path='/' exact  />
            <PrivateRoute component={PostComponent} path='/post/:postId' exact />
            <PrivateRoute component={AddPostContainer} path='/addpost' exact />
            <PrivateRoute component={UpdatePostContainer} path='/updatepost/:postId' exact  />
            <PrivateRoute component={DeletePostComponent} path='/deletepost/:postId' exact />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}