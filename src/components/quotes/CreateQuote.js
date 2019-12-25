import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createQuote } from '../../store/actions/quoteActions';
import PreviewPane from './PreviewPane';

class CreateQuote extends Component {
  state = {
    quote: '',
    sourceTitle: '',
    profilePicture: '',
    profileName: ''
  }
  handleChange = (e) => {
    const { profilePicture, profileName } = this.props;
    this.setState({
      [e.target.id]: e.target.value,
      profilePicture: profilePicture,
      profileName: profileName
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // jika form kosong
    if(this.state.quote === '' || this.state.sourceTitle === ''){
      alert('form tidak boleh kosong!');
      return false;
    }else{
      // cek quote min 20 karakter
      if(this.state.quote.length < 20){
        alert('quote panjangnya minimal 20 karaketer!');
        return false;
      }else if(this.state.sourceTitle.length < 10){
        alert('source title panjangnya minimal 10 karakter!');
        return false;
      }else{
        // Create Quote
        this.props.createQuote(this.state);
      }
    }
    // redirect ke /beranda
    this.props.history.push('/beranda');
    // kosongkan form
    this.setState({
      quote: '',
      sourceTitle: ''
    });
  }
  render(){
    const { auth } = this.props;
    const previewPane = this.state.quote !== '' || this.state.sourceTitle !== '' ? <PreviewPane quote={this.state.quote} sourceTitle={this.state.sourceTitle} profilePicture={this.props.profilePicture} profileName={this.props.profileName} /> : <p className="text-center mt-3">Preview pane waiting for Typing..</p>
    // redirect user ke signin jika belum login
    if(!auth.uid) return <Redirect to="/login" />
    return (
      <div>
        {previewPane}
        <form className="mt-3 mb-5">
          <label htmlFor="quote"><h3>Write Quote:</h3></label>
          <div className="row">
            <div className="col-8">
              <div className="form-group">
                <textarea value={this.state.quote} onChange={this.handleChange} id="quote" className="form-control" aria-label="With textarea" placeholder="Quote.."></textarea>
              </div>
            </div>
            <div className="col-4">
              <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
              <div className="form-group">
                <input value={this.state.sourceTitle} onChange={this.handleChange} id="sourceTitle" className="form-control" type="text" placeholder="Source Title.." />
              </div>
            </div>
            <div className="col-12 btn-group" role="group" aria-label="Basic example">
              <button onClick={this.handleSubmit} className="btn btn-warning text-white w-100">Post</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createQuote: (project) => dispatch(createQuote(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuote)