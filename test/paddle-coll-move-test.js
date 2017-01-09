const chai = require('chai')
const assert = chai.assert

const paddleCollision = require('../lib/paddle-coll-move.js')

describe('paddleCollision', function() {
  var padCol = new paddleMover()

  it('should be a function', function() {
    assert.isFunction(paddleMover)
  })

  it('should allow the paddle to move right', function() {
    assert.equal(paddleX, +10)
  })

  it('should allow the paddle to move left', function() {
    assert.equal(paddleX, -10)
  })


})
