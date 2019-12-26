import React from 'react'
import moment from 'moment';

const QuoteSummery = ({quote}) => {
  return (
    <div className="card">
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
  )
}

export default QuoteSummery
