import React,{ Component } from "react";
import moment from 'moment';


class PreviewPane extends Component{
    state = {
      profilePicture: this.props.profilePicture,
      profileName: this.props.profileName
    }
    
    render(){
    const date = new Date();
    return (
      <div className="row mt-3">
        <div className="col-12">
          <h3 className="font-italic mb-3">Preview Pane v1.0:</h3>
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-lg-8 d-flex">
                  <img src={this.state.profilePicture} alt="" className="rounded-circle mr-2 profile-picture-quote float-left" />
                  <h5 className="text-dark align-self-center">{this.state.profileName}</h5>
                </div>
                <div className="col-lg-4 d-flex justify-content-end">
                  <small className="text-muted align-self-center">{moment(date.toString()).calendar()}</small>
                </div>
              </div>
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p className="font-italic text-dark">"{this.props.quote}"</p>
                <footer className="blockquote-footer text-right"><cite title="Source Title">{this.props.sourceTitle}</cite></footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PreviewPane