function Paddle(options) {
  this.x = options.x || (canvas.width-120)/2
  this.y = options.y-45 || canvas.height-15
  this.height = options.height || 15
  this.width = options.width || 120
  this.context = options.context
  this.canvas = options.canvas
}

Paddle.prototype.draw = function() {
  this.context.beginPath()
  //start the drawing here
  this.context.moveTo(this.x, this.y-20)
  this.context.lineTo(this.x+15, this.y+30)
  this.context.lineTo(this.x+30, this.y-10)
  this.context.lineTo(this.x+45, this.y+10)
  this.context.lineTo(this.x+60, this.y-10)
  this.context.lineTo(this.x+75, this.y+10)
  this.context.lineTo(this.x+90, this.y-10)
  this.context.lineTo(this.x+105,this.y+30)
  this.context.lineTo(this.x+120,this.y-20)
  this.context.lineTo(this.x+60,this.y-40)
  this.context.fill()
}

Paddle.prototype.move = function() {
  if (this.rightPressed && this.x < this.canvas.width-this.width) {
    this.x += 10
  } else if (this.leftPressed && this.x > 0) {
    this.x -= 10
  }
}

module.exports = Paddle
