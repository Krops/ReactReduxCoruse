import React from 'react';

import MenuComponent from './MenuComponent.jsx';
import {connect} from 'react-redux';
import {getPosts} from '../../store/Actions/actions'
import {getPostsSelector} from '../../store/selectors'
import { Link } from 'react-router-dom'

class MenuContainer extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {

    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    const maxIndex = this.props.items.length - 1;
    return (

      <div className="box menu" id="menuId">
        {

          this.props.items.slice(0, 5).map((post, index) => {
            return (
              <div className="post" key={post.id}>
                <MenuComponent index={index} post={post} />
                {index < maxIndex && <br />}

              </div>
            )
          })
        }
        <hr />
        <div>Number of posts: {this.props.items.length}</div>
        <hr />
        <Link to="/addpost" role="button" id="add_post" className="inline button4"><i
          className="fas fa-plus-square"></i>Add Post</Link>
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
    fetchData: () => dispatch(getPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);

