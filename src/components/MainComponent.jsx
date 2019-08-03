import React from 'react';

import PostsContainer from './Posts/PostsContainer.jsx'
import MenuContainer from './Menu/MenuContainer.jsx'


export default class MainComponent extends React.Component {
    render() {
      return (
        <div className="grid-container">
        <div id="headerId" className="box header">
        <h1><a href="#/">Krop Blog</a></h1>
        </div>
        <MenuContainer/>
        <PostsContainer/></div>);
    }
  };
  