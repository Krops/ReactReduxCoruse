import React from 'react';
import { connect } from 'react-redux';

import { getPosts, deletePost, redirectToHome } from '../../store/Actions/actions'
import { Link } from 'react-router-dom'
import { getPropsSelector } from '../../store/selectors'
import PostsComponent from '../Posts/PostsComponent.jsx'
import { Redirect } from 'react-router-dom'

class DeleteComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props.getPosts();
    }
    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        if (this.props.redirectOnSuccess) {
            return <Redirect to="/" />;
        }
        console.log(this.props.items)
        return (
            <div className="box posts" id="postsId">
                
                {
                    this.props.items.map((post, index) => {
                        return (
                            <div className="post" key={post.id}>
                                <h2>Delete this post?</h2>
                                <PostsComponent index={index} post={post} />
                                <button onClick={() => this.props.deletePost(post.id)} id="yes" type="button" className="fas fa-check-circle button4">YES</button>
                                <Link role="button" className="fas fa-ban button4" to="/">CANCEL</Link>
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
        isLoading: state.itemsIsLoading,
        redirectOnSuccess: state.redirectToHome
    };
};

export default connect(mapStateToProps, { getPosts, deletePost })(DeleteComponent);

