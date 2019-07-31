import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../store/reducers'

const store = createStore(rootReducer);

export default class MainComponent extends React.Component {
    render() {
      return (<Provider store={store}><div>
        <div id="headerId" className="box header">
        <h1><a href="#/">Krop Blog</a></h1>
        </div>
        <div id="menuId" className="box menu">
          
        </div>
        <div className="box posts" id="postsId"></div>
        </div></Provider>);
    }
  };
  