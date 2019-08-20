import React from 'react';
import { connect } from 'react-redux';

import { getPosts, updatePost, redirectToHome } from '../../store/actions/actions'
import { Redirect } from 'react-router-dom'
import { getPropsSelector } from '../../store/selectors'
import PostForm from '../Posts/PostForm.jsx'
import _ from 'lodash';

class UpdatePostContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.location.pathname.includes("updatepost")) {
      this.props.getPosts();
    }
  }
  render() {
    if (this.props.redirectOnSuccess.redirectOnSuccess) {
      return <Redirect to="/" />;
    }
    if (this.props.location.pathname.includes("updatepost")) {
      return (
        <div className="box posts" id="postsId">
          {_.map(this.props.items, post => {
            return (
              <div className="post" key={post.id}>
                <PostForm initialValues={post} onSubmit={this.props.updatePost} />
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <div id="postbody">
          <PostForm onSubmit={this.props.addPost} />
        </div>
      )
    }

  }
}

const mapStateToProps = (state, props) => {
  let getItems = {}
  if (props.location.pathname.includes("updatepost")) {
    getItems = getPropsSelector(state, props);
  }
  return {
    items: getItems,
    redirectOnSuccess: state.redirectToHome
  };
};

export default connect(mapStateToProps, { getPosts, updatePost })(UpdatePostContainer);

