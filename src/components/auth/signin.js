import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {

    handleFormSubmit({ email, password }) {
        console.log( this.props );
        this.props.signinUser({ email, password });
    }

    render() {
        // Pull off values that Redux form adds to our props
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            	<fieldset className="form-group">            		
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="email" className="form-control" />
            	</fieldset>
            	<fieldset className="form-group">
            		<label htmlFor="password">Password</label>
                    <Field name="password" component="input" type="password" className="form-control" />
            	</fieldset>
            	<button action="submit" className="btn btn-primary">
            		Sign in
            	</button>
            </form>
        );
    }
}


Signin = reduxForm({
    form: 'signin'
})(Signin);

export default Signin = connect(null, actions)(Signin);