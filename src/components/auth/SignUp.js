import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';


class SignUp extends Component{
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value.toLowerCase()
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // kirim state ke method signUp sebagai parameter
    this.props.signUp(this.state);
  }
  render(){
    const { authError, auth } = this.props;
    if(auth.uid) return <Redirect to="/beranda" />
    return (
      <div>
        <div className="container">
          <div className="row position-relative justify-content-center mt-form">
            <span className="icon-form position-absolute">
              <img src="/img/octopus-hidding.svg" alt="hidding" />
            </span>
            <div className="col-lg-6 col-11 bg-light shadow-sm p-5 text-center">
            <h3 className="mb-4 text-dark">Register</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input 
                onChange={this.handleChange}
                id="email" 
                type="text" 
                className="form-control" 
                placeholder="Email" />
              </div>
              <div className="form-group">
                <input 
                autoComplete="on"
                onChange={this.handleChange} 
                id="password" 
                type="password" 
                className="form-control"
                placeholder="Password" />
              </div>
              <div className="form-group">
                <input 
                onChange={this.handleChange} 
                id="firstName" 
                type="text" 
                className="form-control" 
                placeholder="Fisrt Name" />
              </div>
              <div className="form-group">
                <input 
                onChange={this.handleChange} 
                id="lastName" 
                type="text" 
                className="form-control" 
                placeholder="Last Name" />
              </div>
              <small className="text-danger">{ authError ? <p>{authError}</p> : null }</small>
              <button type="submit" className="btn btn-primary mb-2 mt-3">Register</button>
            </form>
            <small>Have an Account?<Link to="/login">Login</Link></small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)