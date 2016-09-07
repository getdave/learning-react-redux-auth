import React, { PropTypes } from 'react';

const Alert = ({ message }) => {
    return (
        <div className="alert alert-danger">
            {message}
        </div>
    );
};

Alert.displayName = 'Alert';

export default Alert;


