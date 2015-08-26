/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-animatable',
  included: function(app) {
    // var options = app.options.animatable;
    app.import(app.bowerDirectory + '/animate.css/animate.min.css');
  }
};
