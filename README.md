# ember-animatable

Ember Mixin which provides convenient way using [animate.css](https://daneden.github.io/animate.css/) animations in components.

- `animate(animationType:string, animationTarget:string): promise`  
  `animationType`: animation type `bounce`, full list can be found [here](https://github.com/daneden/animate.css)  
  `animationTarget`: css selector `.class-name` (**optional** if not provided component parent element will be target)  
  `returns`: promise which is resolved when animation finishes  

```js
import AnimatableMixin from 'ember-animatable';
export default Ember.Component.extend(AnimatableMixin, {
    click() {
      var anim = this.animate('pulse', '.animation-target');
      anim.then(function(){
          console.log('animation finished')
      });
    }
});
```

## Installation
```js
  ember install ember-animatable
```
