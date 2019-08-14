import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom'

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.renderInput = this.renderInput.bind(this)
        this.renderError = this.renderError.bind(this)
        this.renderTextArea = this.renderTextArea.bind(this)
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
                <div>Theme:<Field name="theme" component={this.renderInput} /></div>
                <div>Description:<Field component={this.renderTextArea} name="description" /></div>
                <button className="fas fa-check-circle button4">Submit</button>
                <Link role="button" className="fas fa-ban button4" to="/">CANCEL</Link>
            </form>
            </div>
        )
    }
    
}
const validateData = formValues => {
    const errors = {};
    if (!formValues.theme){
        errors.theme = 'Theme is required'
    }
    if (!formValues.description){
        errors.description = 'Description is required'
    }
    return errors;
}
export default reduxForm({form: 'postForm', validateData})(PostForm);