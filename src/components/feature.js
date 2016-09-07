import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
    componentWillMount() {
        this.props.fetchMessage();
    }
    render() {
        if (this.props.isFetching) {
            return (
                <img src="/images/ajax.gif" alt="Loading spinner" />
            );  
        } else {
            return (
                <p>{this.props.message}</p>
            );
            
        }
        
    }
}


function mapStateToProps(state) {
    return { 
        message: state.protected.message,
        isFetching: state.protected.isFetching 
    };
}

export default connect(mapStateToProps, actions)(Feature);