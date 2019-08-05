import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PostComponent from './PostComponent.jsx';
import { retrievePost } from '../../store/Reducers/PostsReducers'

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="box posts" id="postsId">
        {
          <PostComponent />
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  retrievePost: id => {
    dispatch(retrievePost(message));
  },
});
export default connect(null, mapDispatchToProps)(PostContainer);

