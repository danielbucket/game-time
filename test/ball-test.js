var assert = require('chai').assert
var Ball = require("../lib/ball.js")

describe('Ball', function() {

  it('"Ball" should be a function', function() {
    assert.isFunction(Ball)
  })

    it.skip('"ball.scoot" should reverse the ball direction', function() {
      var scoot = new Ball({
        x: 1,
        y: {},
        ballRadius:10,
        context:context,
        canvas:{}
      })
      ball.scoot()
      //not sure about the expected result,
      //if it should equal 2
      assert.equal(ball.dx, 2)
    })

    it.skip('"ball.scoot" should make the ball bounce off the move right', function() {
      var scoot = new Ball({
        x: 1,
        y: {},
        ballRadius:10,
        context:context,
        canvas:{}
      })
      ball.scoot()
      //not sure about the expected result,
      //if it should equal 2
      asser.equal(ball.dy, 2)
    })

    it.skip('"ball.scootRevY", should reverse the ball\'s direction on the y-axis', function() {
      var scootRevY = new Ball({
        x: 1,
        y: {},
        ballRadius:10,
        context:context,
        canvas:{}
      })
      ball.scootRevY()
      assert.equal(ball.dy, -1)
    })

    it.skip('"ball.scootRevX", should reverse the ball\'s direction on the x-axis', function() {
      var scootRevX = new Ball({
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
