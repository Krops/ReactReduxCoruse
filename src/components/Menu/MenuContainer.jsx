import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import MenuComponent from './MenuComponent.jsx';
import {retrievePosts} from '../../store/Reducers/PostsReducers'

class MenuContainer extends React.Component {
    constructor(props) {
        super(props);
      }


  render() {
    const maxIndex = 5;
    console.log(this.props)
    return (
        <div className="box menu" id="menuId">
        {
            
          this.props.posts.map((post, index) => {
            return (
                <div className="post" key={post.id}>
                <MenuComponent index={index} post={post} />
                {index < maxIndex && <br/>}
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
}

const mapDispatchToProps = (dispatch) => { 
    return bindActionCreators(retrievePosts, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);

