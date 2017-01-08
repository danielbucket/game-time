function Paddle(options) {
  this.x = options.x
  this.y = options.y
  this.height = options.height
  this.width = options.width
  this.context = options.context
}

Paddle.prototype.draw = function() {
  this.context.beginPath()
  this.context.fillRect(this.x, this.y, this.height, this.width)
  this.context.fillStyle = "#004fdd"
  this.context.closePath()
}

module.exports = Paddle
