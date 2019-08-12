import React from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../../store/Reducers/PostsReducers'
import { Link } from 'react-router-dom'

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div className="box posts" id="postsId">
        {
          <section>
          <h2 className="inline"></h2>
          <span className="inline">at 11/06/1992</span>
          <Link id="myBtn" role="button" className="fas fa-trash-alt inline" to={`/deletepost/${props.match.params.postId}`}></Link>
          <Link id="myBtn2" role="button" className="fas fa-plus-square inline" to={`/updatepost/${props.match.params.postId}`}></Link>
          <p>{props.description}</p>
        </section>
        }
      </div>
    )
  }
}


const mapStateToProps = (state, props) => {
  console.log(state)
  return {
    post: () => state.posts[props.match.params.id]
  }
}

export default connect(mapStateToProps, getPosts)(PostContainer);

