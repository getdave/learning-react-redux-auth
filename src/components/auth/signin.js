import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import Alert from '../alert';

class Signin extends Component {

    handleFormSubmit({ email, password }) {
        this.props.signinUser({ email, password });
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <Alert message={this.props.errorMessage} />
            );
        }
    }

    render() {
        // Pull off values that Redux form adds to our props
        const { handleSubmit } = this.props;

        return ( 
            <div>    
                {this.renderAlert()}       
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
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}


Signin = reduxForm({
    form: 'signin'
})(Signin);

export default Signin = connect(mapStateToProps, actions)(Signin);