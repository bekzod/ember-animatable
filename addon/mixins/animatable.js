import Ember from 'ember';
const { run, RSVP } = Ember;
const TRANSITION_END_PREFIXES = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

export default Ember.Mixin.create({
  animate(animationType, target){
    var deferred = RSVP.defer();
    run.scheduleOnce('afterRender', this, function(){
      var classes = 'animated ' + animationType;
      this.$(target)
        .one(TRANSITION_END_PREFIXES, run.bind(this, function(){
          this.$(target).removeClass( classes );
          deferred.resolve();
        }));
        this.$(target).addClass( classes );
    });
    return deferred.promise;
  }
});
