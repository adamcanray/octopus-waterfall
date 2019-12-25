import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

class SignIn extends Component{
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // console.log(e)
    e.preventDefault();
    // console.log(this.state);
    this.props.signIn(this.state);
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
            <h3 className="mb-4 text-dark">Login</h3>
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
              <small className="text-danger">{ authError ? <p>{authError}</p> : null }</small>
              <button type="submit" className="btn btn-primary mb-2 mt-3">Login</button>
            </form>
            <small>Don't Have an Account?<Link to="/register">Register</Link></small>
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
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)