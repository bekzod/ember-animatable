/* jshint node: true */
'use strict';
var path = require('path');
var walkSync = require('walk-sync');

module.exports = {
  name: 'ember-animatable',
  included: function(app) {
    this._super.included(app);
    var options = app.options['ember-animatable'] || { include: [] };

    var include = options.include;
    var sourceDir = path.join(app.bowerDirectory, 'animate.css/source/');
    var cssFiles = walkSync(sourceDir, ['**/*.css']);

    if (include.length){
      cssFiles = cssFiles.filter(function(file){
        var split = file.split(/[\/,\\]/);
        var fileName = split[split.length - 1].replace('.css', '');
        return include.indexOf(fileName) > -1;
      });
    }
    app.import( path.join( sourceDir, '_base.css' ) );

    cssFiles.forEach(function(file){
      app.import( path.join( sourceDir, file ) );
    });
  }
};
