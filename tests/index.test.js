var Aframe = require('aframe-core');
var noClickLookControls = require('../index.js').component;
var entityFactory = require('./helpers').entityFactory;

Aframe.registerComponent('no-click-look-controls', noClickLookControls);

describe('no-click-look-controls', function () {
  beforeEach(function (done) {
    this.el = entityFactory();
    this.el.addEventListener('loaded', function () {
      done();
    });
  });

  describe('no-click-look-controls', function () {
    it('is good', function () {
      assert.equal(1, 1);
    });
  });
});
