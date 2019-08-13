import React from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../../store/Actions/actions'
import { Link } from 'react-router-dom'
import {getPropsSelector} from '../../store/selectors'
import PostsComponent from './PostsComponent.jsx'

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchData();
    
  }
  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
  }
  if (this.props.isLoading) {
      return <p>Loading…</p>;
  }
  console.log(this.props.items)
  return (
    <div className="box posts" id="postsId">
    {
        
      this.props.items.map((post, index) => {
        return (
            <div className="post" key={post.id}>
            <PostsComponent index={index} post={post} />
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
      isLoading: state.itemsIsLoading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: () => dispatch(getPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);

