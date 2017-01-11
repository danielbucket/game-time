function Ball(options){
  this.x = options.x || 0
  this.y = options.y || 0
  this.height = options.height || 10
  this.width = options.width || 10
  this.context = options.context
  this.dx = options.dx || 1
  this.dy = options.dy || 1
  this.speed = options.speed || 5
  this.ballRadius = options.ballRadius || 10
  this.canvas = options.canvas
}

Ball.prototype.scoot = function(){
  this.x += this.dx
  this.y += this.dy
}

Ball.prototype.scootRevY = function(){
  if(this.dy == 1){
    this.dy = -1
  }else if (this.dy == -1){
    this.dy = 1
  }
}

Ball.prototype.scootRevX = function(){
  if(this.dx == 1){
    this.dx = -1
  }else if(this.dx == -1){
    this.dx = 1
  }
}

Ball.prototype.draw = function(){
this.context.beginPath()
 this.context.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2)
 this.context.fillStyle = "white"
 this.context.fill()
}

module.exports= Ball
