import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import CustomInput from '../forms/custom-input';
import Alert from '../alert';


class Signup extends Component {
    
    handleFormSubmit(formProps) {
        this.props.signupUser(formProps);
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <Alert message={this.props.errorMessage} />
            );
        }
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        
        return (
            <div>
                {this.renderAlert()}   
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <Field name="email" type="email" component={CustomInput} label="Email"/>
                    <Field name="password" type="password" component={CustomInput} label="Password"/>
                    <Field name="password_confirmation" type="password" component={CustomInput} label="Confirm Password"/>
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

    // Email
    if (!email) {
        errors.email = 'Please enter an email';
    }

    // Password
    if (!password) {
        errors.password = 'Password is required';
    } else if (password !== password_confirmation) {
        errors.password_confirmation = 'Please ensure your passwords match exactly';
    }


    // Password Confirmation
    if (!password_confirmation) {
        errors.password_confirmation = 'Please enter a password confirmation';
    }

    return errors;
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}


Signup = reduxForm({
    form: 'signup',
    validate
})(Signup);

export default connect(mapStateToProps, actions)(Signup);
