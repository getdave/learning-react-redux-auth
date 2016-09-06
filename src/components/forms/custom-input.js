import React, { Component } from 'react'

class CustomInput extends Component {
  render() {
    const { input, label, type, meta: { touched, error } } = this.props
    return (
      <div className="form-group">
        <label>{label}</label>
        <div>
            <input {...input} className="form-control" placeholder={label} type={type}/>
            {touched && error && <span className="error text-danger">{error}</span>}
        </div>
      </div>
    )
  }
}


export default CustomInput;
