import React, { Component } from 'react';
import firebase from 'firebase/app';


class ProfileNameForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayName: '',
    }
  }
  handleChangeDisplayName = (e) => {
    // ubah value agar uppercase dichar pertama pada setiap word-nya
    var splitStr = e.target.value.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    let valToUpper = splitStr.join(' ');
    // if (e.target.files[0]) {
    //   const image = e.target.files[0];
    //   this.setState(() => ({ image }));
    // }
    this.setState({
      [e.target.id]: valToUpper,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // uploaderImg
    const { photoURL } = this.props;
    // berikan displayName
    var user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: this.state.displayName
    }).then(function() {
      // Update successful.
      console.log('displayName berhasil');
      // reload page
      window.location.reload();
    }).catch(function(error) {
      // An error happened.
      console.log('displayName gagal', error);
    });
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="displayName">Profile Name:</label>
          <input onChange={this.handleChangeDisplayName} id="displayName" type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="modal-footer">
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
    )   
  }
}

export default ProfileNameForm