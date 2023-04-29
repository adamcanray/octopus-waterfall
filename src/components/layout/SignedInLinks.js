import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';


const SignedInLinks = (props) => {
  return (
    <ul className="navbar-nav mt-auto">
      <li className="nav-item"><NavLink className="nav-link" to="/beranda">Beranda</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link" to="/profile">Profile</NavLink></li>
      <li className="nav-item"><a href="/" onClick={props.signOut} className="nav-link">Log Out</a></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)