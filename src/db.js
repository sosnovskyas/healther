'use strict';

const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyD1YNK7qmU03pn6SOMC9_GnTG1eB8-A-gs",
  authDomain: "healther-31b19.firebaseapp.com",
  databaseURL: "https://healther-31b19.firebaseio.com",
  storageBucket: "healther-31b19.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export const dbRef = firebase.database().ref();
