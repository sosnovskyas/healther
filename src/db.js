'use strict';
const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyD1YNK7qmU03pn6SOMC9_GnTG1eB8-A-gs",
  authDomain: "healther-31b19.firebaseapp.com",
  databaseURL: "https://healther-31b19.firebaseio.com",
  storageBucket: "healther-31b19.appspot.com",
};

export default class {
  constructor() {
    firebase.initializeApp(firebaseConfig);


  }

  get ref() {
    return firebase.database().ref();
  }

  signIn() {
    firebase.auth().signInWithRedirect(new firebase.auth.FacebookAuthProvider())
      .then(function (result) {
        if (result.credential) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // ...
        }
        // The signed-in user info.
        var user = result.user;
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    /*firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
     .then(function (result) {
     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
     var token = result.credential.accessToken;
     // The signed-in user info.
     var user = result.user;
     // ...
     console.log('login', result)
     })
     .catch(function (error) {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     // The email of the user's account used.
     var email = error.email;
     // The firebase.auth.AuthCredential type that was used.
     var credential = error.credential;
     // ...
     });*/
  }
}

