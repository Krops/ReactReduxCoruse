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


const mapStateToProps = (state, props) => {
  console.log(state)
  return {
    seletedPost: () => state.retrievePost(props.match.params.id)
  }
}

export default connect(mapStateToProps)(PostContainer);

