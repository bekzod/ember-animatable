import EmberRouter from '@ember/routing/router';
import config from './config/environment';

var Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function() {
});

export default Router;
