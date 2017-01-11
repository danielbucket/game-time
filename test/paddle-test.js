var assert = require('chai').assert

var Paddle = require('../lib/paddle.js')

describe('Paddle', function() {
  context('with default attributes', function() {

    it('"Paddle()" should be a function', function() {
      var paddle = new Paddle({x:10, y:20, width:30, height:40, context:{}, canvas:{}})
      assert.isFunction(Paddle)
    })

    it('"Paddle.move()" should move the paddle', function() {
      var paddle = new Paddle({x:10, y:20, width:30, height:40, context:{}, canvas:{width:100}, lP:false, rP:true})
      paddle.move()
      assert.equal(paddle.x, 20)
    })
  })
})
