import Mixin from '@ember/object/mixin';
import { animate } from '../utils';

export default Mixin.create({
  animate(animationType, target) {
    return animate(this.$(target), animationType);
  }
});
