'use strict';
require('./index.scss');

const dbRef = require('./db').dbRef;

const header = document.querySelector('.header');

dbRef.child('slogan').on('value', snap => header.innerText = snap.val());
