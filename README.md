# A-Frame `no-click-look-controls` Component

##Overview
Intuitive camera controls for desktop 3D experiences with [A-Frame](aframe.io).

##Features
* :no_entry_sign:<--->:no_entry_sign: Dynamically set maximum yaw and pitch (see options) to control sensitivity and max turn angles.
* :computer: Provides intuitive desktop view controls without requiring mousedown+drag.
* :sunglasses::iphone::100: Includes the core touch and HMD view controls for drop-in replacement of core `look-controls` component.

##Demos:

[Panorama with plenty of space to explore the whole scene without anxiety of moving cursor off the canvas](https://alexrkass.github.io/no-click-example/)

[User interface with restricted view angles to focus user on content.](https://alexrkass.github.io/aframe-thetarestricted-example)

##Usage
####Script
```html
<html>
  <head>
    <!-- A-Frame standard library if needed -->
    <script src="https://aframe.io/releases/latest/aframe.js"></script>

    <!-- Component (includes A-Frame core) -->
    <script src="dist/aframe-no-click-look-controls.min.js"></script>
  </head>
  <body>
    <a-scene>
      <!-- ... -->
      <a-entity camera no-click-look-controls="[options]"></a-entity>
    </a-scene>
  </body>
</html>
```
####NPM

Install.

```
$ npm install aframe-no-click-look-controls
```

Register.

```javascript
var AFRAME = require('aframe-core');
var NoClickLookControls = require('aframe-no-click-look-controls');
AFRAME.registerComponent('no-click-look-controls', NoClickLookControls);
```

Use.

##Options

(units are radians)

Property      | Default | Description
--------------|---------|-------------
maxyaw        | 3π      | Controls the max y-axis rotation. Actual max viewing angle is twice the parameter, ie 3π is 3π to the right and 3π to the left.
maxpitch      | π/2     | Controls the max x-axis rotation. Actual max viewing angle is twice the parameter, ie π/2 is π/2 up and π/2 down.
enabled       | true    | Enables controls

##TODOS (PRs welcome)

* allow asymmetrical yaw and pitch values rather than forcing symmetrical distances from original camera position

* add option to slow down camera rotation as the mouse gets closer to the edge of the canvas

* write tests
