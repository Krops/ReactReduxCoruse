import React from 'react';
import { reduxForm, Field } from 'redux-from';

class PostForm extends React.Component {

    renderInput ({ input, meta }) {
        const className = `form-width border ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div>
                <input {...input} autoComplete="off" className={className} />
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
                <textarea {...input} autoComplete="off" className={className} />
                {this.renderError(meta)}
            </div>
        );
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div>Theme:<Field name="theme" component={this.renderInput} /></div>
                <div>Description:<Field component={this.renderTextArea} name="description" /></div>
                <button id="yes" type="button" className="fas fa-check-circle button4">YES</button>
                <button id="cancel" type="button" className="fas fa-ban button4">CANCEL</button>
            </form>
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