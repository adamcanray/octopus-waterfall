import React, { Component } from 'react'
import { connect } from 'react-redux';
import {  Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/storage';
import UpdateProfileNameForm from './UpdateProfileNameForm';
import ProfilePhotoUpdate from './ProfilePhotoUpdate';

class ProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      // DELETE
      email: '',
      password: '',
    }
  }
  // DELETE ACCOUNT
  handleChangeDelete = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  deleteAcc = (e) => {
    e.preventDefault();
    var user = firebase.auth().currentUser;
    var credential = firebase.auth.EmailAuthProvider.credential(
      this.state.email,
      this.state.password
    );
    // Prompt the user to re-provide their sign-in credentials
    user.reauthenticateWithCredential(credential).then(() => {
      // User re-authenticated.
      // hapus user
      user.delete().then(() => {
        // User deleted.
        console.log('account berhasil dihapus')
        // reload page
        window.location.reload();
      }).catch((error) => {
        // An error happened.
        console.log('account gagal dihapus', error)
      });
    }).catch(function(error) {
      // An error happened.
      console.log('user gagal re authenticate', error)
    });
  }

  // UPDATE ACCOUNT
  

  render(){
    const { auth } = this.props;
    // jika tidak login redirect ke signin
    if(!auth.uid) return <Redirect to="/login" />

    const updateProfileNameForm = <UpdateProfileNameForm />


    return (
      <div className="container">
        {/* modal DELETE ACCOUNT */}
        <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">ReAuthenticate</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.deleteAcc}>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input onChange={this.handleChangeDelete} id="email" type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input onChange={this.handleChangeDelete} id="password" type="password" className="form-control" placeholder="Password" autoComplete="on" />
                  </div>
                  <div className="modal-footer">
                    <p className="text-danger">WARNING: this action will delete your account permanently</p>
                    <button type="submit" className="btn btn-danger w-100">Delete Account</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* modal UPDATE PROFILE NAME */}
        <div className="modal fade" id="updateProfileNameModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Update Profile Name</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                { updateProfileNameForm }
              </div>
            </div>
          </div>
        </div>
        {/* modal UPDATE PROFILE PICTURE */}
        <div className="modal fade" id="updateProfilePictureModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Update Profile Picture</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ProfilePhotoUpdate />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-7">
            <div className="card border-0 text-center shadow-sm p-5">
              <img src={auth.photoURL || 'https://firebasestorage.googleapis.com/v0/b/octopuswaterfall.appspot.com/o/profilePictureDefault%2FphotoProfileDefault.jpg?alt=media&token=3528e30f-bbeb-4c59-bfe0-a8586f414ee0'} className="img-profile card-img-top rounded-circle img-thumbnail mx-auto mt-3" alt="profile-pict" />
              <div className="row p-0 mt-3 justify-content-center">
                <div className="col-lg-6 col-md-6">
                  <button className="btn btn-light w-100" data-toggle="modal" data-target="#updateProfilePictureModal">Update Picture</button>
                </div>
              </div>
              <div className="card-body">
                <div className="card-text">
                  <span className="info-user-name">{auth.displayName}</span><br/>
                  <span className="text-muted">{auth.email}</span><br/>
                  <hr/>
                  <span className="">User ID:</span><br/>
                  <span className="text-muted">{auth.uid}</span>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-md-12 mb-2">Action:</div>
                    <div className="col-lg-6 col-md-6 p-0 mt-1 pr-md-1">
                      <button className="btn btn-success w-100" data-toggle="modal" data-target="#updateProfileNameModal">Update Profile Name</button>
                    </div>
                    <div className="col-lg-6 col-md-6 p-0 mt-1 pl-md-1">
                      <button className="btn btn-danger w-100" data-toggle="modal" data-target="#deleteModal">Delete Account</button>
                    </div>
                </div>
              </div>
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
  }
}

export default connect(mapStateToProps)(ProfilePage)
