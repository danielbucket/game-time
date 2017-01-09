function Paddle(options) {
  this.x = options.x
  this.y = options.y
  this.height = options.height
  this.width = options.width
  this.context = options.context
  this.canvas = options.canvas
}

Paddle.prototype.draw = function() {
  this.context.fillStyle = "#004fdd"
  this.context.fillRect(this.x, this.y-10, this.height, this.width)
}

Paddle.prototype.move = function() {
  if (this.rightPressed && this.x < this.canvas.width-this.width) {
    this.x += 10
  } else if (this.leftPressed && this.x > 0) {
    this.x -= 10
  }
}

module.exports = Paddle
