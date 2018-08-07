/* jshint node: true */
'use strict';
let path = require('path');
let funnel = require('broccoli-funnel');
let concat = require('broccoli-concat');

module.exports = {
  name: 'ember-animatable',
  included(app) {
    this._super.included(app);
    this.appOptions = app.options['ember-animatable'] || {};
    this.sourceDir = path.dirname(require.resolve('animate.css'));
    app.import(path.join('vendor', 'animate.css'));
  },

  treeForVendor() {
    let includeFiles = this.appOptions.include;
    let filter = '**/*.css';
    if (Array.isArray(includeFiles)) {
      includeFiles.push('_base');
      filter = function(file) {
        let split = file.split(/[\/,\\]/);
        let fileName = split[split.length - 1].replace('.css', '');
        return includeFiles.indexOf(fileName) > -1;
      }
    }
    let tree = funnel(this.sourceDir, {
      include: [filter]
    });
    tree = concat(tree, {
      inputFiles: ['**/*.css'],
      outputFile: '/animate.css'
    })
    return tree;
  }
};
