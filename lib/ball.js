// var x = canvas.width/2;
// var y = canvas.height-30;
// var speed = 5;
// var dx = 5;
// var dy = -5;
// var rightPressed = false;
// var leftPressed = false;

function Ball(options){
  this.x = options.x || 0;
  this.y = options.y || 0;
  this.height = options.height || 10;
  this.width = options.width || 10;
  this.context = options.context;
  this.dx = options.dx || 1;
  this.dy = options.dy || 1;
  this.speed = options.speed || 5;
  this.ballRadius = options.ballRadius ||20;
  this.canvas = options.canvas;
  this.baseSpeed = 5;
}


// function Ball(x, y, speed, dx){
//   this.x = x;
//   this.y = y;
//   this.speed = speed;
//   this.dx=5;
// }


Ball.prototype.scoot = function(){
  this.x += this.dx * this.speed;
  this.y += this.dy * this.speed;
};


Ball.prototype.scootRevY = function(){
  if(this.dy == 1){
    this.dy = -1;
  }else if (this.dy == -1){
    this.dy = 1;
  }
};

Ball.prototype.scootRevX = function(){
  if(this.dx == 1){
    this.dx = -1;
  }else if(this.dx == -1){
    this.dx = 1;
  }
};

Ball.prototype.reset = function(currentLevel){
  this.speed = this.baseSpeed + currentLevel * 2;

};

Ball.prototype.draw = function(){
  // this.context.beginPath();
  // this.context.arc(x, y, ballRadis, 0, Math.PI*2);
  // this.context.fillStyle = "white";
  // this.context.fill();
  // this.context.closePath();
  this.context.beginPath();
 this.context.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
 // this.context.closePath();
 this.context.fillStyle = "white";
 this.context.fill();
  // this.context.fillRect(this.x, this.y, this.width, this.height);
};


module.exports= Ball;
