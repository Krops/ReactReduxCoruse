import React from 'react';

import MenuComponent from './MenuComponent.jsx';
import { connect } from 'react-redux';
import { getPosts } from '../../store/actions/actions'
import { getPostsSelector } from '../../store/selectors'
import { Link } from 'react-router-dom'

class MenuContainer extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const maxIndex = this.props.items.length - 1;
    return (

      <div className="box menu" id="menuId">
        {

          Object.values(this.props.items).slice(0, 5).map((post, index) => {
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
        <Link to="/login" role="button" id="login_button" className="inline button4"><i
          className="fas fa-plus-square"></i>Login</Link>
        <Link to="/logout" role="button" id="logout_button" className="inline button4"><i
          className="fas fa-plus-square"></i>Logout</Link>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    items: getPostsSelector(state),
  };
};

export default connect(mapStateToProps, { getPosts })(MenuContainer);

