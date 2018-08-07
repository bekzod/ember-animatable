import AnimatableMixin from 'ember-animatable/mixins/animatable';
import { module, test } from 'qunit';

module('Unit | Mixin | animatable');

// Replace this with your real tests.
test('it works', function(assert) {
  let AnimatableObject = Ember.Object.extend(AnimatableMixin);
  let subject = AnimatableObject.create();
  assert.ok(subject);
});
