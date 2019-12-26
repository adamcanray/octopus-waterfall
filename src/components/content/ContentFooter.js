import React from 'react'

const TopFooter = () => {
  return (
    <div>
      <div className="top-footer">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4 d-none d-md-block p-0">
              <small>{}</small>
            </div>
            <div className="col-md-8 p-0 text-right">
              <a target="_blank" rel="noopener noreferrer" className="p-2" href="https://facebook.com">
                <img className="top-footer-icon" src="/img/facebook.svg" alt="facebook-logo" />
              </a>
              <a target="_blank" rel="noopener noreferrer" className="p-2" href="https://flickr.com">
                <img className="top-footer-icon" src="/img/flickr.svg" alt="flickr-logo" />
              </a>
              <a target="_blank" rel="noopener noreferrer" className="p-2" href="https://google.co.id">
                <img className="top-footer-icon" src="/img/google-plus.svg" alt="google-logo" />
              </a>
              <a target="_blank" rel="noopener noreferrer" className="p-2" href="https://soundcloud.com">
                <img className="top-footer-icon" src="/img/soundcloud.svg" alt="soundcloud-logo" />
              </a>
              <a target="_blank" rel="noopener noreferrer" className="p-2" href="https://twitter.com">
                <img className="top-footer-icon" src="/img/twitter.svg" alt="twitter-logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const MidFooter = () => {
  return (
    <div>
      <div className="mid-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 d-none d-md-block pl-0 pt-5">
              <img className="mid-footer-logo" src="/img/logo-octopus-1-300px.svg" alt="logo-octopus-waterfall" />
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-6 p-3">
                  <h3 className="mid-footer-header-desc font-weight-bolder font-italic">Tools we Use</h3>
                  <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://getbootstrap.com/">Bootstrap 4</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">React JS</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/">Firebase</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/">GitHub Repository</a></li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-6 p-3">
                  <h3 className="mid-footer-header-desc font-weight-bolder font-italic">What's New?</h3>
                  <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/octopuswaterfall/">v1.2 - Profile Page</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/octopuswaterfall/">v1.2 - Responsive Design on Beranda Page</a></li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-6 p-3">
                  <h3 className="mid-footer-header-desc font-weight-bolder font-italic">Contributor</h3>
                  <ul>
                    <li className="d-inline m-1">
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/adamcanray/octopus-waterfall/pulls">
                        <img className="mid-footer-contributor-img" src="/img/boy.svg" alt="contrib-1" />
                      </a>
                    </li>
                    <li className="d-inline m-1">
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/adamcanray/octopus-waterfall/pulls">
                        <img className="mid-footer-contributor-img" src="/img/boy-1.svg" alt="contrib-1" />
                      </a>
                    </li>
                    <li className="d-inline m-1">
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/adamcanray/octopus-waterfall/pulls">
                        <img className="mid-footer-contributor-img" src="/img/girl.svg" alt="contrib-1" />
                      </a>
                    </li>
                    <li className="d-inline m-1">
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/adamcanray/octopus-waterfall/pulls">
                        <img className="mid-footer-contributor-img" src="/img/girl-1.svg" alt="contrib-1" />
                      </a>
                    </li>
                    <li className="d-inline m-1">
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/adamcanray/octopus-waterfall/pulls">
                        <img className="mid-footer-contributor-img" src="/img/man.svg" alt="contrib-1" />
                      </a>
                    </li>
                    <li className="d-inline m-1">
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/adamcanray/octopus-waterfall/pulls">
                        <img className="mid-footer-contributor-img" src="/img/man-1.svg" alt="contrib-1" />
                      </a>
                    </li>
                    <li className="d-inline m-1">
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/adamcanray/octopus-waterfall/pulls">
                        <img className="mid-footer-contributor-img" src="/img/man-2.svg" alt="contrib-1" />
                      </a>
                    </li>
                    <li className="d-inline m-1">
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/adamcanray/octopus-waterfall/pulls">
                        <img className="mid-footer-contributor-img" src="/img/man-3.svg" alt="contrib-1" />
                      </a>
                    </li>
                    <li className="d-inline m-1">
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/adamcanray/octopus-waterfall/pulls">
                        <img className="mid-footer-contributor-img" src="/img/man-4.svg" alt="contrib-1" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-6 p-3">
                  <h3 className="mid-footer-header-desc font-weight-bolder font-italic">Join a Team?</h3>
                  <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.mindmeister.com/1376641656/">Mindmeister</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/users/adamcanray/projects/1">GitHub Project</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/adamcanray/octopus-waterfall">GitHub Repository</a></li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-6 p-3">
                  <h3 className="mid-footer-header-desc font-weight-bolder font-italic">Found a Bug?</h3>
                  <ul>
                    <li className="text-light">
                      <small>Contact Developer at:</small><br/>
                      <a target="_blank" rel="noopener noreferrer" href="https://developer.octopuswaterfall.web.app/">developer.octopuswaterfall.web.app</a></li>
                    <li className="text-light">
                      <small>or Pull Request</small><br/>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/adamcanray/octopus-waterfall">GitHub Repository</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const BotFooter = () => {
  return (
    <div className="bot-footer text-center text-light">
      <small>&copy;2019 <span className="bot-footer-border-right pr-1">Octopus Waterfall</span>
      <span className="pl-1">Built With &#10084; by: <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/adamcanray">Muhammad Adam Canrayneldy</a></span></small>
    </div>
  )
}

const ContentFooter = () => {
  return (
    <div>
      <TopFooter />
      <MidFooter />
      <BotFooter />
    </div>
  )
}

export default ContentFooter
