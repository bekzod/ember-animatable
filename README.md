# ember-animatable

Ember Mixin which provides convenient way using [animate.css](https://daneden.github.io/animate.css/) animations in components. [Demo](http://animatable-demo.divshot.io)

- `animate(animationType:string, animationTarget:string): promise`  
  `animationType`: animation type `bounce`, full list can be found [here](https://github.com/daneden/animate.css#basic-usage)  
  `animationTarget`: css selector `.class-name` (**optional** if not provided component is the target)  
  `returns`: promise which is resolved when animation finishes  

```js
import Ember from 'ember';
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

## Use what you need 
By default addon will import all css animations provided by [animate.css](https://daneden.github.io/animate.css/), but usually you don't need all css animations, so you can specify which once to import in app config.

```js
 var app = new EmberApp(defaults, {
  'ember-animatable': {
    include: ['pulse', 'bounceIn'] // pulse and bounceIn animation will be imported
  }
});
```

## Installation
```js
  ember install ember-animatable
```
