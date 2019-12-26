import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect, Link } from 'react-router-dom';
import moment from 'moment';
import Notifications from '../beranda/sidebar/Notifications';

const QuoteDetail = (props) => {
  // console.log(props);
  // const id = props.match.params.quote_id;
  const { quote, auth, notifications } = props;
  // redirect user ke signin jika belum login
  if(!auth.uid) return <Redirect to="/login" />
  
  if (quote) {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-8">
            <Link to="/beranda" className="btn text-light btn-warning">Back</Link>
            <div className="card mt-3">
              <div className="card-header">
                <div className="row">
                  <div className="col-lg-8 d-flex">
                    <img src={quote.profilePicture || 'https://firebasestorage.googleapis.com/v0/b/octopuswaterfall.appspot.com/o/profilePictureDefault%2FphotoProfileDefault.jpg?alt=media&token=3528e30f-bbeb-4c59-bfe0-a8586f414ee0'} alt="pict" className="rounded-circle mr-2 profile-picture-quote float-left" />
                    <h5 className="text-dark align-self-center">{quote.profileName}</h5>
                  </div>
                  <div className="col-lg-4 d-flex justify-content-end">
                    <small className="text-muted align-self-center">{moment(quote.createdAt.toDate().toString()).calendar()}</small>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p className="font-italic text-dark">"{quote.quote}"</p>
                  <footer className="blockquote-footer text-right">{quote.email} <cite title="Source Title">{quote.sourceTitle}</cite></footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <Notifications notifications={ notifications } />
          </div>
        </div>
      </div>
    )
  } else{
    return (
      <div className="container mt-5 text-center">
        <p>Loading quotes...</p>
      </div> 
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.quote_id;
  const quotes = state.firestore.data.quotes;
  const quote = quotes ? quotes[id] : null
  return {
    quote: quote,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'quotes' },
    { collection: 'notifications', limit: 5, orderBy: ['time', 'desc'] }
  ])
)(QuoteDetail)
