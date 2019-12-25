import React from 'react'
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <div className="container">
        <div className="card border-0 mb-3">
          <div className="row mt-5">
            <div className="col-lg-5">
              <img className="w-100" src="/img/what-is-octopus-waterfall.svg" alt="iconAbout" />
            </div>
            <div className="col-lg-7 mt-3">
              <div className="card-body">
                <h3 className="font-italic font-weight-bolder title-desc">What is Octopus Waterfall?</h3>
                <p className="desc">
                Octopus Waterfall is a website for you to find a Quote 
                or create your own Quote and share it with other users.
                <br/>
                let's get started by logging into octopus waterfall, 
                then write your first quote!
                </p>
                <Link className="btn btn-light" to="/login">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
