import React, { Component } from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {  Redirect } from 'react-router-dom';
import CreateQuote from '../quotes/CreateQuote';
import QuoteList from '../quotes/QuoteList';
import Notifications from './sidebar/Notifications';
import InfoUser from './sidebar/InfoUser';
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

  render(){
    let history = this.props.history;
    const { auth, quotes, notifications} = this.props;
    // jika tidak login redirect ke signin
    if(!auth.uid) return <Redirect to="/login" />
    // show modal pada saat pertama beranda di load
    if ( auth.displayName === null) $("#exampleModal").modal('show')
    // jika proses upload sudah selesai, inilah yang dilakukan
    // const profileNameForm = this.state.progress === 100 ? <ProfileNameForm photoURL={this.state.photoURL} /> : <p className="text-dark text-center">Wait for Upload..</p>
    const profileNameForm = <ProfileNameForm photoURL={this.state.photoURL} />;
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