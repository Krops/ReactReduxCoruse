import React from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../../store/actions/actions'
import { getPropsSelector } from '../../store/selectors'
import PostsComponent from './PostsComponent.jsx'
import _ from 'lodash';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
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

const mapStateToProps = (state, props) => {
  return {
    items: getPropsSelector(state, props),
  };
};

export default connect(mapStateToProps, { getPosts })(PostContainer);

