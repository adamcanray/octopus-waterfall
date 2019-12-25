import React from 'react'
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className="navbar-nav mt-auto">
      <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link" to="/login">Sign In</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link" to="/register">Sign Up</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks