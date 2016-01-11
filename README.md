# A-Frame `no-click-look-controls` Component

##Overview
Intuitive look controls for desktop 3D experiences with [A-Frame](aframe.io).

##Demo:
[https://alexrkass.github.io/no-click-example/](https://alexrkass.github.io/no-click-example/)

##Features
* :no_entry_sign::arrow_left::arrow_right::no_entry_sign: Dynamically set maximum yaw and pitch (see options) to control sensitivity and max turn angles.
* :computer: Provides intuitive desktop view controls without requiring mousedown+drag.
* :sunglasses::iphone::100: Includes the core touch and HMD view controls for drop-in replacement of core `look-controls` component.



##Usage
####Script
```html
<html>
  <head>
    <!-- A-Frame Library -->
    <script src="https://aframe.io/releases/latest/aframe.js"></script>

    <!-- Component -->
    <script src="dist/aframe-no-click-look-controls"></script>
  </head>
  <body>
    <a-scene>
      <!-- ... -->
      <a-entity camera no-click-look-controls.js></a-entity>
    </a-scene>
  </body>
</html>
```
####NPM

Install module using CLI.

```
$ npm install no-click-look-controls
```

Register component in Javascript.

```javascript
var AFRAME = require('aframe-core');
var NoClickLookControls = require('aframe-no-click-look-controls');
AFRAME.registerComponent('no-click-look-controls', NoClickLookControls);
```

Add markup.

```html
<a-entity camera no-click-look-controls></a-entity>
```

##Options

(units are radians)

Property      | Default | Description
--------------|---------|-------------
maxyaw        | 3π      | Controls the max y-axis rotation. Actual max viewing angle is twice the parameter, ie 3π is 3π to the right and 3π to the left.
maxpitch      | π/2     | Controls the max x-axis rotation. Actual max viewing angle is twice the parameter, ie π/2 is π/2 up and π/2 down.
enabled       | true    | Enables controls

######Example Options
```html
<a-entity camera no-click-look-controls="maxyaw: 3.14; maxpitch: 0"></a-entity>
```
