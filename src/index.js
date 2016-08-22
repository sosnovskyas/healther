'use strict';
require('./index.scss');
const Auth = require('./components/auth');

const auth = new Auth({
  elem: document.querySelector('.auth')
});
