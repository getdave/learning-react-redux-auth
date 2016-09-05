import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
    
    componentWillMount() {
        this.props.signoutUser();
    }

    render() {
        return (
            <div className="alert alert-info">
                We're sorry to see you go! Come back soon.
            </div>
        );
    }
}

export default connect(null, actions)(Signout);
