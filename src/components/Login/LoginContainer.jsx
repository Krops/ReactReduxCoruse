import React from 'react';

import { connect } from 'react-redux';
import LoginForm from './LoginForm.jsx'
import { login } from '../../store/actions/actions'
import { Redirect } from 'react-router-dom'
import { redirectToHome } from '../../store/actions/actionCreators'

class LoginContainer extends React.Component {
    render() {
        if (this.props.isAuthorized.isAuthorized) {
            return <Redirect to="/" />;
        }
        return (
            <div className="box posts" id="postsId">
                <LoginForm onSubmit={this.props.login} />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.accountIsAuthorized
    };
};

export default connect(mapStateToProps, { login, redirectToHome })(LoginContainer);