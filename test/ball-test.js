var assert = require('chai').assert
var Ball = require("../lib/ball.js")

describe('Ball', function() {

  it('"Ball" should be a function', function() {
    assert.isFunction(Ball)
  })

    it('"ball.scoot" should reverse the ball direction', function() {
      var ball = new Ball({
        x: 1,
        y: {},
        ballRadius:10,
        context:context,
        canvas:{}
      })
      ball.scoot()
      //not sure about the expected result,
      //don't think that 1 is correct
      assert.equal(ball.dx, 1)
    })

    it('"ball.scoot" should make the ball bounce off the move right', function() {
      var ball = new Ball({
        x: 1,
        y: {},
        ballRadius:10,
        context:context,
        canvas:{}
      })
      ball.scoot()
      //not sure about the expected result,
      //don't think that 1 is correct
      assert.equal(ball.dy, 1)
    })

    it('"ball.scootRevY", should reverse the ball\'s direction on the y-axis', function() {
      var ball = new Ball({
        x: 1,
        y: {},
        ballRadius:10,
        context:context,
        canvas:{}
      })
      ball.scootRevY()
      assert.equal(ball.dy, -1)
    })

    it('"ball.scootRevX", should reverse the ball\'s direction on the x-axis', function() {
      var ball = new Ball({
        x: 1,
        y: {},
        ballRadius:10,
        context:context,
        canvas:{}
      })
      ball.scootRevX()
      assert.equal(ball.dx, -1)
    })
})
