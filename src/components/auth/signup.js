import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
    
    handleFormSubmit() {
        console.log("Form submitted");
    }

    renderField({ input, label, type, meta: { touched, error } }){
          return (
            <div>
            <label>{label}</label>
            <div>
              <input {...input} placeholder={label} type={type}/>
              {touched && error && <span>{error}</span>}
            </div>
          </div>
          )
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        
        return (
            <div>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <fieldset className="form-group">                   
                        <label htmlFor="email">Email</label>
                        <Field component={this.renderField} name="email" component="input" type="email" className="form-control" />
                    </fieldset>
                    <fieldset className="form-group">                   
                        <label htmlFor="password">Password</label>
                        <Field component={this.renderField} name="password" component="input" type="password" className="form-control" />

                    </fieldset>
                    <fieldset className="form-group">                   
                        <label htmlFor="password_confirmation">Confirm Password</label>
                        <Field component={this.renderField} name="password_confirmation" component="input" type="password" className="form-control" />
                    </fieldset>
                    <button action="submit" className="btn btn-primary" disabled={submitting}>
                        Signup
                    </button>
                </form>
            </div>
        );
    }
}


function validate(formProps) {
    const errors = {};
    const { email, password, password_confirmation } = formProps;

    if (password !== password_confirmation) {
        errors.password = 'Passwords do not match';
    }

    return errors;
}


Signup = reduxForm({
    form: 'signup',
    validate
})(Signup);

export default connect(null, actions)(Signup);
