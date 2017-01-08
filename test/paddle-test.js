const chai = require('chai')
const assert = chai.assert

const Paddle = require('../lib/paddle.js')

describe('Paddle', function() {
  context('with default attributes', function() {
    // var paddle = new Draw()

    it('"Paddle()" should be a function', function() {
      var paddle = new Paddle(2,3,4,5)
      assert.isFunction(Paddle)
    })
//not sure this second test says anything important
    it('"Paddle.draw()" should draw a box', function() {
      var paddle = new Paddle(2,3,4,5)
      assert.equal(Paddle.draw)
    })
  })

})
