import React from 'react';
import { connect } from 'react-redux';

import { getPosts, deletePost, redirectToHome } from '../../store/actions/actions'
import { Link } from 'react-router-dom'
import { getPropsSelector } from '../../store/selectors'
import PostsComponent from '../Posts/PostsComponent.jsx'
import { Redirect } from 'react-router-dom'
import _ from 'lodash';

class DeleteComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPosts();
    }
    render() {
        if (this.props.redirectOnSuccess.redirectOnSuccess) {
            return <Redirect to="/" />;
        }
        return (
            <div className="box posts" id="postsId">


                {_.map(this.props.items, post => {
                    return (
                        <div className="post" key={post.id}>
                            <h2>Delete this post?</h2>
                            <PostsComponent index={post.id} post={post} />
                            <button onClick={() => this.props.deletePost(post.id)} id="yes" type="button" className="fas fa-check-circle button4">YES</button>
                            <Link role="button" className="fas fa-ban button4" to="/">CANCEL</Link>
                        </div>
                    )
                })}

            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        items: getPropsSelector(state, props),
        redirectOnSuccess: state.redirectToHome
    };
};

export default connect(mapStateToProps, { getPosts, deletePost })(DeleteComponent);

