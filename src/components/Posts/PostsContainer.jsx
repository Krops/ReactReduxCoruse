import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../store/actions/actions'
import { redirectToHome } from '../../store/actions/actionCreators'
import { getPostsSelector } from '../../store/selectors'
import PostsComponent from './PostsComponent.jsx'
import _ from 'lodash';

class PostsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.props.redirectToHome(false);
  }

  componentDidMount() {
    this.props.getPosts();

  }
  render() {
    return (
      <div className="box posts" id="postsId">

        {_.map(this.props.items, post => {
          return (
            <div className="post" key={post.id}>
              <PostsComponent index={post.id} post={post} />
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: getPostsSelector(state)
  };
};



export default connect(mapStateToProps, { getPosts, redirectToHome })(PostsContainer);

