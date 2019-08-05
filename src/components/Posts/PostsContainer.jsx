import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import PostsComponent from './PostsComponent.jsx';
import {retrievePosts} from '../../store/Reducers/PostsReducers'

class PostsContainer extends React.Component {
    constructor(props) {
        super(props);
      }


  render() {
    const maxIndex = this.props.posts.length-1;
    return (
        <div className="box posts" id="postsId">
        {
            
          this.props.posts.map((post, index) => {
            return (
                <div className="post" key={post.id}>
                <PostsComponent index={index} post={post} />
                {index < maxIndex && <hr />}
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

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);

