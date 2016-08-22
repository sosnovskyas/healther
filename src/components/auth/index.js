'use strict';
require('./auth.scss');

class Auth {
  constructor(options) {
    // incoming options
    this.elem = options.elem;

    // firebase
    const DbConstructor = require('./../db/').default;
    this.db = new DbConstructor();

    // template
    this.template = require('./auth.jade');

    // handlers
    this.elem.addEventListener('click', event => this.onCLick(event));
    this.db.onAuth(result => this.onAuth(result).bind(this))
  }

  onCLick(event) {
    console.log('click');
    const target = event.target;

    if (target.closest('.auth__sign-out')) this.db.signOut();
    if (target.closest('.auth__sign-in')) this.db.signIn();
  }

  onAuth(res) {
    this.render(res);
  }

  render(obj) {
    console.log('render', obj);
    this.elem.innerHTML = this.template(obj);
  }
}

module.exports = Auth;
