import React from 'react';

import { connect } from 'react-redux';
import { logout } from '../../store/actions/actions'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

class LogoutContainer extends React.Component {
    render() {
        if (localStorage.getItem("token")) {
            return (
                <div className="box posts" id="postsId">
                    <h2>Do you want to logout?</h2>
                    <button onClick={this.props.logout} id="yes" type="button" className="fas fa-check-circle button4">Logout</button>
                    <Link role="button" className="fas fa-ban button4" to="/">CANCEL</Link>
                </div>
            )
        } else {
            return <Redirect to="/login" />;
        }

    }

}

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.accountIsAuthorized
    };
};

export default connect(mapStateToProps, { logout })(LogoutContainer);