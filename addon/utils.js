import { run } from '@ember/runloop';
import RSVP from 'rsvp';
import $ from 'jquery';
const TRANSITION_END_PREFIXES = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

export function animate(target, animationType) {
  let deferred = RSVP.defer();
  run.scheduleOnce('afterRender', function(){
    let classes = 'animated ' + animationType;
    $(target)
      .one(TRANSITION_END_PREFIXES, run.bind(this, function(e){
        $(e.currentTarget).removeClass(classes);
        deferred.resolve();
      }))
      .addClass(classes);
  });
  return deferred.promise;
}
