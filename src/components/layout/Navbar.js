import React from 'react'
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';


const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  const linkBrandLogo = auth.uid ? (
      <Link to="/beranda" className="navbar-brand">
        <img src="/img/logo-octopus-1-40px.png" alt="logo" />
        Octopus Waterfall
      </Link> 
      ) : (
      <Link to="/" className="navbar-brand">
        <img src="/img/logo-octopus-1-40px.png" alt="logo" />
        Octopus Waterfall
      </Link>
    )
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm">
      <div className="container">
        {linkBrandLogo}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse sm-d-flex flex-md-row-reverse" id="navbarSupportedContent">
          { auth.isLoaded && links }
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)