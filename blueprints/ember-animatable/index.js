module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('animate.css', '~3.4.0');
  }
};
