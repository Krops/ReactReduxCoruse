import React from 'react';

import { connect } from 'react-redux';
import LoginForm from './LoginForm.jsx'
import { login } from '../../store/Actions/actions'
import { Redirect } from 'react-router-dom'

class LoginContainer extends React.Component {
    render() {
        if (this.props.isAuthorized) {
            console.log("authorized")
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

export default connect(mapStateToProps, { login })(LoginContainer);