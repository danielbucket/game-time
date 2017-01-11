var assert = require('chai').assert
var Ball = require("../lib/ball.js") //?

describe('Ball', function() {

  it('"Ball" should be a function', function() {
    assert.isFunction(Ball)
  })
})
