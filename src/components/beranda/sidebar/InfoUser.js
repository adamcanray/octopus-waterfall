import React from 'react'
import { Link } from 'react-router-dom';
import { signOut } from '../../../store/actions/authActions';
import { connect } from 'react-redux';


const InfoUser = (props) => {
  const { auth } = props;
  return (
    // nantinya jadi info user
    <div className="card mb-3 border-0 text-center shadow-sm pt-3 pb-3" id="infoUser">
      <img src={auth.photoURL || 'https://firebasestorage.googleapis.com/v0/b/octopuswaterfall.appspot.com/o/profilePictureDefault%2FphotoProfileDefault.jpg?alt=media&token=3528e30f-bbeb-4c59-bfe0-a8586f414ee0'} className="img-info-user card-img-top rounded-circle mx-auto img-thumbnail" alt="profile-pict" />
      <div className="card-body">
        <p className="card-title">
          <span className="font-weight-bolder text-warning info-user-name" >{auth.displayName}</span><br/>
          <span className="text-muted">{auth.email}</span>
        </p>
        <Link className="btn btn-warning text-white w-100" to="/profile">Profile</Link>
        <Link className="btn btn-danger text-white w-100 mt-2" onClick={props.signOut} to="/">Log Out</Link>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(InfoUser)
