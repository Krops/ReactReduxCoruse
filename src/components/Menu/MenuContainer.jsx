import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import MenuComponent from './MenuComponent.jsx';
import {retrievePosts} from '../../store/Reducers/PostsReducers'
import { Link } from 'react-router-dom'

class MenuContainer extends React.Component {
    constructor(props) {
        super(props);
      }


  render() {
    const maxIndex = this.props.posts.length-1;
    
    return (
        <div className="box menu" id="menuId">
        {
            
          this.props.posts.slice(0, 5).map((post, index) => {
            return (
                <div className="post" key={post.id}>
                <MenuComponent index={index} post={post} />
                {index < maxIndex && <br/>}
                
              </div>
            )
          })
        }
        <hr/>
                <div>Number of posts: {this.props.posts.length}</div>
                <hr/>
                 <Link to="/addpost" role="button" id="add_post" className="inline button4"><i
                className="fas fa-plus-square"></i>Add Post</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
}

const mapDispatchToProps = (dispatch) => { 
    return bindActionCreators(retrievePosts, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);

