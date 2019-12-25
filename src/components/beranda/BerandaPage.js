import React, { Component } from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {  Redirect } from 'react-router-dom';
import CreateQuote from '../quotes/CreateQuote';
import QuoteList from '../quotes/QuoteList';
import Notifications from './sidebar/Notifications';
import InfoUser from './sidebar/InfoUser';
import firebase from 'firebase/app';
import "firebase/storage";
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min';
import ProfileNameForm from './ProfileNameForm';

class BerandaPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      image: null,
      photoURL: '',
      progress: 0,
      errorSizeMsg: ''
    }
  }
  errorSizeMsg = (size) => {
    const message = 'your size is '+size+' (Max 200 KB)';
    return message;
  }
  bytesToSize = (bytes) => {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
  }
  handleChange = e => {
    // Upload PHOTO
    let sizeTotal = this.bytesToSize(e.target.files[0].size);
    if(e.target.files[0].size > 204800){
      const errorSizeMsg = this.errorSizeMsg(sizeTotal);
      this.setState({
        errorSizeMsg: errorSizeMsg
      });
      e.target.value = "";
    }else{
      const image = e.target.files[0];
      
      this.setState(() => ({ image, errorSizeMsg: '' }));
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
          .ref("profilePicture")
          .child(auth.uid)
          .getDownloadURL()
          .then(photoURL => {
            this.setState({ photoURL });
          });
      }
    );
  };


  render(){
    let history = this.props.history;
    const { auth, quotes, notifications} = this.props;
    // jika tidak login redirect ke signin
    if(!auth.uid) return <Redirect to="/login" />
    // show modal pada saat pertama beranda di load
    if ( auth.displayName === null || auth.photoURL === null ) $("#exampleModal").modal('show')
    // jika proses upload sudah selesai, inilah yang dilakukan
    const profileNameForm = this.state.progress === 100 ? <ProfileNameForm photoURL={this.state.photoURL} /> : <p className="text-dark text-center">Wait for Upload..</p>
    const buttonFormUpload = this.state.progress === 100 ? <p className="text-primary">Upload Success</p> : <button type="submit" className="btn btn-light mb-3">Upload File</button>
    const labelBeforeError = this.state.errorSizeMsg === '' ? <label htmlFor="file" className="mt-2">File (Max 200 KB)</label> : <label></label>
    return (
      <div className="container">
        {/* modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">lengkapi Profile</h5>
              </div>
              <div className="modal-body">
                <img src={this.state.photoURL || 'https://via.placeholder.com/150'} width="150" height="150" />
                <form onSubmit={this.handleUpload}>
                  <div className="form-group">
                    {labelBeforeError}
                    <p className="text-danger">{this.state.errorSizeMsg}</p>
                    <input id="file" type="file" className="form-control-file" onChange={this.handleChange} />
                  </div>
                  <div className="progress mb-2">
                    <progress className="progress-bar w-100 h-100" value={this.state.progress} max="100" />
                  </div>
                  {buttonFormUpload}
                </form>
                {profileNameForm}
              </div>
            </div>
          </div>
        </div>      

        <div className="row flex-row-reverse">
          <div className="col-lg-4 col-md-4 col-sm-12 mt-5">
            <InfoUser auth={auth} />
            <Notifications notifications={ notifications } />
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <CreateQuote history={history} profilePicture={auth.photoURL} profileName={auth.displayName} />
            <QuoteList quotes={quotes} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    // users: state.firestore.ordered.users,
    quotes: state.firestore.ordered.quotes,
    notifications: state.firestore.ordered.notifications
    
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    // { collection: 'users'},
    { collection: 'quotes', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 5, orderBy: ['time', 'desc'] }
  ])
)(BerandaPage)