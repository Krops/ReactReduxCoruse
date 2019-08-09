import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import PostsComponent from './PostsComponent.jsx';
import {retrievePosts} from '../../store/Reducers/PostsReducers'
import {createSelector} from 'reselect'

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
    return bindActionCreators({retrievePosts: retrievePosts()}, dispatch)
  }



  const makeGetPosts = () => createSelector(
    (state) => state.posts.posts,
    (state, props) => props.match.params.postId,
    (posts, postId) => posts
      .filter(id => posts[id].id === postId)
      .map(id => {
        return posts[id];
      }),
  );

  const showAllPosts = (state) => state.posts.posts;

  const postSelector = (posts, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return posts;
      case 'SHOW_ONE':

    }
  }
  
  const mapState = () => {
    const getPosts = makeGetPosts();
    return (state, ownProps) => {
      return {posts: getPosts(state, ownProps)};
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);

