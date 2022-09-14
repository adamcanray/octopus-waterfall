import React from 'react'
import { Link } from 'react-router-dom';

const ContactPage = (props) => {
  return (
    <div className="container">
      <div className="card border-0 mb-3">    
        <div className="row mt-5">
          <div className="col-lg-5">
            <img className="w-100" src="/img/register-first.svg" alt="iconContact" />
          </div>
          <div className="col-lg-7 mt-3">
            <div className="card-body">
            <h3 className="font-italic font-weight-bolder title-desc">Contact Us on:</h3>
            <p className="desc">
            Phone/Office: <b>0878-7777-6767</b> / <b>021-123-123</b><br/>
            GitHub: <a href="https://github.com/adamcanray/">Adamcanray</a><br/>
            ...
            </p>
            <Link className="btn btn-light" to="/login">
              Get Started
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
