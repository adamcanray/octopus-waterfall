import React, { Component } from 'react'
import firebase from 'firebase/app';

class UpdateProfileNameForm extends Component {
  state = {
    displayName: ''
  }
  // UPDATE ACCOUNT
  handleChangeUpdate = (e) => {
    // ubah value agar uppercase dichar pertama pada setiap word-nya
    var splitStr = e.target.value.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    let valToUpper = splitStr.join(' ');
    // console.log(valToUpper); 
    this.setState({
      [e.target.id]: valToUpper
    })
  }
  updateAcc = (e) => {
    e.preventDefault();
    // berikan deisplayName
    var user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: this.state.displayName,
      // photoURL: "https://example.com/jane-q-user/profile.jpg"
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
      <form onSubmit={this.updateAcc}>
        <div className="form-group">
          <label htmlFor="displayName">Profile Name:</label>
          <input onChange={this.handleChangeUpdate} id="displayName" type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="modal-footer">
          <small className="text-success">Octopus Waterfall: at this time we only provide editing for the Profile Name</small>
          <button type="submit" className="btn btn-success w-100">Update Account</button>
        </div>
      </form>
    )
  }
}

export default UpdateProfileNameForm
