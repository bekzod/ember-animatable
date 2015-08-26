/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-animatable',
  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/animate-css/animate.min.css');
  }
};
