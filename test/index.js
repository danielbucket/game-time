var assert = require('chai').assert
var Ball = require("../lib/index.js")

describe('various functions in the main index file to be tested', function() {

  it.skip('"keyDownHandler" should return rightPressed = true', function() {
    var keyDownHandler = new keyDownHandler()
    keyDownHandler(39)
    assert.equal(keyDownHandler.rightPressed, true)
  })

  it.skip('"keyDownHandler" should return rightPressed = true', function() {
    var keyDownHandler = new keyDownHandler()
    keyDownHandler(37)
    assert.equal(keyDownHandler.leftPressed, true)
  })

  it.skip('"keyDownHandler" should return rightPressed = true', function() {
    var keyDownHandler = new keyDownHandler()
    keyDownHandler(39)
    assert.equal(keyDownHandler.rightPressed, true)
  })

  it.skip('"keyDownHandler" should return rightPressed = true', function() {
    var keyDownHandler = new keyDownHandler()
    keyDownHandler(39)
    assert.equal(keyDownHandler.rightPressed, true)
  })
})
