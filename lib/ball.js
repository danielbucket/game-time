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
  this.context.arc = this.
}

// Ball.prototype.scoot = function(){
//   this.x++;
//   this.y++;
// };

Ball.prototype.draw = function(){
  // this.context.beginPath();
  // this.context.arc(x, y, ballRadis, 0, Math.PI*2);
  // this.context.fillStyle = "white";
  // this.context.fill();
  // this.context.closePath();
  this.context.beginPath();
  this.context.arc(this.x, this.y, this.radius, Math.PI*2);
  this.context.fillStyle = "white";
  this.context.fillRect(this.x, this.y, this.width, this.height);
};

// Ball.prototype.draw = function drawBall(){
//   this.context.beginPath();
//   this.context.arc(x, y, ballRadis, 0, Math.PI*2);
//   this.context.fillStyle = "white";
//   this.context.fill();
//   console.log("yelp");
//   context.closePath();
// };

module.exports= Ball;
