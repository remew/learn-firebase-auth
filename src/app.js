import firebase from 'firebase';
import React, {Component} from 'react';
import {render} from 'react-dom';

const config = {
  apiKey: "AIzaSyAiWTe1AiNC3ebMge4Vd_sLDCWb1dkHXGA",
  authDomain: "learn-auth-66be3.firebaseapp.com",
  databaseURL: "https://learn-auth-66be3.firebaseio.com",
  projectId: "learn-auth-66be3",
  storageBucket: "learn-auth-66be3.appspot.com",
  messagingSenderId: "166276778159"
};

firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
    };
    firebase.auth().onAuthStateChanged(user => {
      console.log(user && user.providerData);
      this.setState({user});
    });
  }
  _signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  _signInWithGithub() {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  _linkWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.state.user.linkWithPopup(provider);
  }
  _linkWithGithub() {
    const provider = new firebase.auth.GithubAuthProvider();
    this.state.user.linkWithPopup(provider);
  }
  _signInWithEmail() {
    alert('not implemented yet');
  }
  _signOut() {
    firebase.auth().signOut().then((...args) => {
      this.setState({user: null});
    });
  }
  render() {
    return (
      <div>
      {this.state.user === undefined ? <p>loadiing...</p> :
        this.state.user === null
        ?
        <div>
          <button onClick={() => this._signInWithGoogle()}>Sign in with Google</button>
          <button onClick={() => this._signInWithGithub()}>Sign in with Github</button>
          <button onClick={() => this._signInWithEmail()}>Sign in with Email</button>
        </div>
        :
        <div>
          <p>{this.state.user.displayName}</p>
          <p>{this.state.user.uid}</p>
          <button onClick={() => this._signOut()}>Sign out</button>
          <button onClick={() => this._linkWithGoogle()}>Link with Google</button>
          <button onClick={() => this._linkWithGithub()}>Link with Github</button>
        </div>
      }
      </div>
    );
  }
}

render(
  <App />
  , document.body.appendChild(document.createElement('div')));

