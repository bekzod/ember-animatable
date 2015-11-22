import Ember from 'ember';
const { run, RSVP, $ } = Ember;
const TRANSITION_END_PREFIXES = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

export default Ember.Mixin.create({
  animate(animationType, target) {
    let deferred = RSVP.defer();
    run.scheduleOnce('afterRender', this, function(){
      let classes = 'animated ' + animationType;
      this.$(target)
        .one(TRANSITION_END_PREFIXES, run.bind(this, function(e){
          $(e.currentTarget).removeClass(classes);
          deferred.resolve();
        }))
        .addClass(classes);
    });
    return deferred.promise;
  }
});
