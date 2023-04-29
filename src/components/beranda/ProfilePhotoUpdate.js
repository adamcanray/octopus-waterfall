import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/storage';


class ProfilePhotoUpdate extends Component{
  state = {
    // UPDATE
    image: null,
    photoURL: '',
    progress: 0,
    errorSizeMsg: ''
  }

  // errorNotChooseImg = () => {
  //   const message = 'please choose an image.';
  //   return message;
  // }
  errorSizeMsg = (size) => {
    const message = 'your size is '+size+' (Max 200 KB)';
    return message;
  }
  bytesToSize = (bytes) => {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
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
    // const { image } = this.state;
    // if (image === null){
    //   alert('kamu belum memilih gambar!');
    //   return false;
    // } else{
    //   window.location.reload();
    // }
    if (this.state.image === null){
      alert('kamu belum memilih gambar!');
      return false;
    }
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
          }).then(()=>{
            var user = firebase.auth().currentUser;
            user.updateProfile({
              photoURL: this.state.photoURL
            }).then(function() {
              // Update successful.
              console.log('update profile success');
            }).catch(function(error) {
              // An error happened.
              console.log('update profile error', error);
            });
          });
      }
    );
  };

  render(){
    const buttonFormUpload = this.state.progress === 100 ? <p className="text-success">Upload Success</p> : <button onClick={this.handleUpload} type="submit" className="btn btn-light mr-2">Upload File</button>
    const labelBeforeError = this.state.errorSizeMsg === '' ? <label htmlFor="file" className="mt-2">File (Max 200 KB)</label> : <label></label>
    return (
      <div>
        <img src={this.state.photoURL || 'https://via.placeholder.com/150'} width="150" height="150" alt="preview-img" />
        <form>
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(ProfilePhotoUpdate)