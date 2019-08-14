import React from 'react';
import { connect } from 'react-redux';

import { getPosts, updatePost, redirectToHome } from '../../store/Actions/actions'
import { Redirect } from 'react-router-dom'
import {getPropsSelector} from '../../store/selectors'
import PostForm from '../Posts/PostForm.jsx'

class UpdatePostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props.getPosts();
    
  }
  render() {
    console.log(this.props.hasErrored)
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
  }
  if (this.props.isLoading) {
      return <p>Loading…</p>;
  }
  console.log(this.props.redirectOnSuccess)
  if (this.props.redirectOnSuccess) {
    () => dispatch({
      type: 'REDIRECT_ON_SUCCESS',
      redirectOnSuccess: false
  })
    return <Redirect to="/" />;
}
console.log(this.props.redirectOnSuccess)

  console.log(this.props.items)
  return (
    <div className="box posts" id="postsId">
    {
        
      this.props.items.map((post) => {
        return (
            <div className="post" key={post.id}>
            <PostForm initialValues={post} onSubmit={this.props.updatePost}/>
          </div>
        )
      })
    }
  </div>
)
  }
}

const mapStateToProps = (state, props) => {
  return {
      items: getPropsSelector(state, props),
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading,
      redirectOnSuccess: state.redirectToHome
  };
};

export default connect(mapStateToProps, {getPosts, updatePost})(UpdatePostContainer);

