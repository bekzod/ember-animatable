import Component from '@ember/component';
import AnimatableMixin from 'ember-animatable';

export default Component.extend(AnimatableMixin, {
  classNames: ['my-component'],
  click(){
    this.animate('pulse');
  },

  didInsertElement(){
    this.$().offset();
    this._super(...arguments);
  }
});
