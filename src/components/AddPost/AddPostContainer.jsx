import React from 'react';

import {connect} from 'react-redux';
import PostForm from '../Posts/PostForm.jsx'
import {addPost, redirectToHome} from '../../store/Actions/actions'
import { Redirect } from 'react-router-dom'

class AddPostContainer extends React.Component {
    render() {
        console.log(this.props.redirectOnSuccess)
  if (this.props.redirectOnSuccess) {
      console.log(this.props.redirectOnSuccess)
    return <Redirect to="/" />;
}
        return(
            <div id="postbody">
            <PostForm onSubmit={this.props.addPost}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        redirectOnSuccess: state.redirectToHome
    };
  };
  
export default connect(mapStateToProps, {addPost})(AddPostContainer);