import React from 'react';

import {connect} from 'react-redux';
import PostForm from '../Posts/PostForm.jsx'
import {addPost} from '../../store/Actions/actions'

class AddPostContainer extends React.Component {
    render() {
        return(
            <div id="postbody">
            <PostForm onSubmit={this.props.addPost}/>
            </div>
        )
    }

}
  
export default connect(null, {addPost})(AddPostContainer);