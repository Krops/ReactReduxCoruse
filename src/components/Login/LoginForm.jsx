import React from 'react';
import { reduxForm, Field } from 'redux-form';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.renderInput = this.renderInput.bind(this)
        this.renderError = this.renderError.bind(this)
    }

    renderInput ({ input, meta }) {
        const className = `form-width border ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div>
                <input {...input} className={className} />
                {this.renderError(meta)}
            </div>
        );
    }

    renderError ({ error, touched }) {
        if (touched && error) {
            return (
                <div className="errors ui">
                    <div>{error}</div>
                </div>
            );
        }

    }

    renderTextArea({input, meta}) {
        const className = `form-width border ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div>
                <textarea {...input} className={className} />
                {this.renderError(meta)}
            </div>
        );
    }
    render() {
        return (
            <div>
            <form onSubmit={this.props.handleSubmit} to="/">
                <div>Username:<Field name="login" component={this.renderInput} /></div>
                <div>Password:<Field name="password" component={this.renderInput} /></div>
                <button className="fas fa-check-circle button4">Login</button>
            </form>
            </div>
        )
    }
    
}
const validateData = formValues => {
    const errors = {};
    if (!formValues.login){
        errors.login = 'Theme is required'
    }
    if (!formValues.password){
        errors.password = 'Description is required'
    }
    return errors;
}
export default reduxForm({form: 'loginForm', validateData})(LoginForm);