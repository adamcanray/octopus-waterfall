import React from 'react'

const ContentBody = () => {
  return (
    <div className="container mt-5 mb-5">
    <div className="card border-0 mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img className="w-100" src="/img/what-is-octopus-waterfall.svg" alt="icon-content-blok-1" />
          </div>
          <div className="col-md-8 p-3">
            <div className="card-body">
              <h3 className="content-blok-satu font-weight-bolder font-italic">What is Octopus Waterfall?</h3>
              <p className="paragraf-font">
              Octopus Waterfall is a website for you to find a Quote 
              or create your own Quote and share it with other users.
              let's get started by logging into octopus waterfall, 
              then write your first quote!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card border-0 mb-3">
        <div className="row flex-row-reverse mt-5">
          <div className="col-md-4">
            <img className="w-100" src="/img/register-first.svg" alt="icon-content-blok-2" />
          </div>
          <div className="col-md-8 text-md-right p-3">
            <div className="card-body">
              <h3 className="content-blok-satu font-weight-bolder font-italic">Register First</h3>
              <p className="paragraf-font">
              by registering you can enter and become an Octopus Waterfall user.
              This is Unforgettable Experiance!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card border-0 mb-3">
        <div className="row mt-5">
          <div className="col-md-4">
            <img className="w-100" src="/img/congratulation.svg" alt="icon-content-blok-3" />
          </div>
          <div className="col-md-8 p-3">
            <div className="card-body">
              <h3 className="content-blok-satu font-weight-bolder font-italic">Congratulations!</h3>
              <p className="paragraf-font">
              If you done Register then you can Login and join Amazing People.
              Whoaa, this is a really cool upgrade!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentBody
