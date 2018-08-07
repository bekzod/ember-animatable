import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App = Application.extend({
  modulePrefix: config.modulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
