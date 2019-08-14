import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPosts, redirectToHome } from '../../store/Actions/actions'
import { getPostsSelector } from '../../store/selectors'
import { Link } from 'react-router-dom'
import PostsComponent from './PostsComponent.jsx'

class PostsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchData();
    this.props.clearRedirect(false);

  }
  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

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

const mapStateToProps = (state) => {
  return {
    items: getPostsSelector(state),
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(getPosts()),
    clearRedirect: () => dispatch(redirectToHome(false))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);

