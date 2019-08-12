import React from 'react';
//import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {getPosts} from '../../store/Reducers/PostsReducers'
import {createSelector} from 'reselect'
import { Link } from 'react-router-dom'

class PostsContainer extends React.Component {
  render() {
    const maxIndex = this.props.posts.length-1;
    return (
        <div className="box posts" id="postsId">
        {
            
          this.props.posts.map((post) => {
            return (
                <div className="post" key={post.id}>
                  <h2 className="inline"><Link to={`/post/${post.id}`}>{post.theme}</Link></h2>
                  <span className="inline">at 11/06/1992</span>
                  <Link id="myBtn" role="button" className="fas fa-trash-alt inline" to={`/deletepost/${post.postId}`}></Link>
                  <p>{post.description}</p>
                {index < maxIndex && <hr />}
              </div>
            )
          })
        }
      </div>
    )
  }
}

const getPostsSelect = (state) => {
  getPosts()
  console.log(state.props)
  return Object.values(state.props);
} 

const getPostSelect = (posts) => {
  return posts.filter(post => post.id).reverse();
}

const postSelector = createSelector(getPostsSelect, getPostSelect);

const mapStateToProps = state => {
  return {
    posts: postSelector(state)
  };
}




export default connect(mapStateToProps)(PostsContainer);

