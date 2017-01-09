function Paddle(options) {
  this.x = options.x || (canvas.width-120)/2
  this.y = options.y || canvas.height-15
  this.height = options.height || 15
  this.width = options.width || 120
  this.context = options.context
  this.canvas = options.canvas
}

Paddle.prototype.draw = function() {
  this.context.fillStyle = "#004fdd"
  this.context.fillRect(this.x, this.y-10, this.width, this.height)
}

Paddle.prototype.move = function() {
  if (this.rightPressed && this.x < this.canvas.width-this.width) {
    this.x += 10
  } else if (this.leftPressed && this.x > 0) {
    this.x -= 10
  }
}

module.exports = Paddle
