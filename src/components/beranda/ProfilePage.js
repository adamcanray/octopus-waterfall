import React, { Component } from 'react'
import { connect } from 'react-redux';
import {  Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/storage';
import UpdateProfileNameForm from './UpdateProfileNameForm';

class ProfilePage extends Component {
  state = {
    // DELETE
    email: '',
    password: '',
    // UPDATE
    image: null,
    photoURL: '',
    progress: 0
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
  handleChange = e => {
    // Upload PHOTO
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };
  // UPLOAD IMAGE
  handleUpload = (e) => {
    e.preventDefault();
    // Upload PHOTO
    const { auth } = this.props;
    const { image } = this.state;
    const uploadTask = firebase.storage().ref(`profilePicture/${auth.uid}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        firebase.storage()
          .ref("images")
          .child(auth.uid)
          .getDownloadURL()
          .then(photoURL => {
            this.setState({ photoURL });
          });
      }
    );
  };

  render(){
    const { auth } = this.props;
    // jika tidak login redirect ke signin
    if(!auth.uid) return <Redirect to="/login" />

    const updateProfileNameForm = this.state.progress === 100 ? <UpdateProfileNameForm /> : <p className="text-dark text-center">Wait for Upload..</p>
    const buttonFormUpload = this.state.progress === 100 ? <p className="text-primary">Upload Success</p> : <button type="submit" className="btn btn-light mb-3">Upload File</button>

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
        {/* modal UPDATE ACCOUNT */}
        <div className="modal fade" id="updateModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Update Account</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleUpload}>
                  <div className="form-group">
                    <label htmlFor="file">File</label>
                    <input id="file" type="file" className="form-control-file" onChange={this.handleChange} />
                  </div>
                  <div className="progress mb-2">
                    <progress className="progress-bar w-100 h-100" value={this.state.progress} max="100" />
                  </div>
                  {buttonFormUpload}
                </form>
                { updateProfileNameForm }
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-7">
            <div className="card border-0 text-center shadow-sm p-5">
              <img src={auth.photoURL} className="img-profile card-img-top rounded-circle img-thumbnail mx-auto mt-3" alt="profile-pict" />
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
                      <button className="btn btn-success w-100" data-toggle="modal" data-target="#updateModal">Update Account</button>
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
