'use strict';
require('./index.scss');

const DbConstructor = require('./db').default;
const db = new DbConstructor();

const header = document.querySelector('.header');

const signInBtn = document.createElement('input');
signInBtn.setAttribute('type', 'button');
signInBtn.setAttribute('value', 'signIn');
signInBtn.addEventListener('click', ()=>db.signIn());
header.appendChild(signInBtn);

//.child('slogan').on('value', snap => header.innerText = snap.val());
