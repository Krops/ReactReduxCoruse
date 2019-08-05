import React from 'react';

import PostsContainer from './Posts/PostsContainer.jsx'
import PostContainer from './Post/PostContainer.jsx'
import MenuContainer from './Menu/MenuContainer.jsx'
import { Link } from 'react-router-dom'


export default class MainComponent extends React.Component {
    render() {
      return (
        <div className="grid-container">
        <div id="headerId" className="box header">
        <h1><Link to="/">Krop Blog</Link></h1>
        </div>
        <MenuContainer/>
        <PostsContainer/></div>);
    }
  };
  