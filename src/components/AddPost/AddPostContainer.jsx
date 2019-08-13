import React from 'react';

import {connect} from 'react-redux';
import PostForm from '../Posts/PostForm.jsx'
import {addPost} from '../../store/Actions/actions'

class AddPostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit (valueForm) {
        this.props.addPost(valueForm)
    }

    render() {
        return(
            <div id="postbody">
            <PostForm onSubmit={this.onSubmit}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        addPost: state.addPost
    };
  };
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPost())
    };
  };
  
export default connect(null, mapDispatchToProps)(AddPostContainer);