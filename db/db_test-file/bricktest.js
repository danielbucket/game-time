
function Bricks(options) {
  this.x = options.x
  this.y = options.y
  this.height = options.height
  this.width = options.width
}

Bricks.prototype.draw = function() {
  this.context.beginPath()
  this.fillRect(this.x, this.y, this.height, this.width)
  this.fillStyle = "white"
  this.context.fill()
  this.context.closePath()
}
