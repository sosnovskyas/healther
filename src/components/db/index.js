'use strict';

export default class {
  constructor() {
    this.firebase = require("firebase");
    const firebaseConfig = {
      apiKey: "AIzaSyD1YNK7qmU03pn6SOMC9_GnTG1eB8-A-gs",
      authDomain: "healther-31b19.firebaseapp.com",
      databaseURL: "https://healther-31b19.firebaseio.com",
      storageBucket: "healther-31b19.appspot.com",
    };

    this.firebase.initializeApp(firebaseConfig);
    this.provider = new this.firebase.auth.FacebookAuthProvider();
    this.auth = this.firebase.auth();


  }

  get ref() {
    return this.firebase.database().ref();
  }

  signIn() {
    this.auth.signInWithRedirect(this.provider)
      .then(result => {
        if (result.credential) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // ...
        }
        // The signed-in user info.
        var user = result.user;
      })
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

  signOut() {
    this.auth.signOut()
      .then(() => {
        // Sign-out successful.
        console.log('signed out')
      }, error => {
        // An error happened.
        console.error(error)
      });
  }

  onAuth(callback) {
    this.auth.onAuthStateChanged(res => callback(res));
  }
}

