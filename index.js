/* jshint node: true */
'use strict';
var path = require('path');
var funnel = require('broccoli-funnel');
var concat = require('broccoli-concat');

module.exports = {
  name: 'ember-animatable',
  included: function(app) {
    this._super.included(app);
    this.appOptions = app.options['ember-animatable'] || {};
    this.sourceDir = path.join(app.bowerDirectory, 'animate.css', 'source');
    app.import(path.join('vendor','animate.css'));
  },

  treeForVendor: function() {
    var includeFiles = this.appOptions.include;
    var filter = '**/*.css';
    if (Array.isArray(includeFiles)) {
      includeFiles.push('_base');
      filter = function(file) {
        var split = file.split(/[\/,\\]/);
        var fileName = split[split.length - 1].replace('.css', '');
        return includeFiles.indexOf(fileName) > -1;
      }
    }
    var tree = funnel(this.sourceDir, {
      include: [filter]
    });
    tree = concat(tree, {
      inputFiles: ['**/*.css'],
      outputFile: '/animate.css'
    })
    return tree;
  }
};
