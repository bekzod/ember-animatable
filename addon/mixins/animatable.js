import Ember from 'ember';
import { animate } from '../utils';

export default Ember.Mixin.create({
  animate(animationType, target) {
    return animate(animationType, this.$(target));
  }
});
