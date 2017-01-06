const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const Ball = require('./ball.js');
let ball = new Ball({
  x: canvas.width/2,
  y: canvas.height/2,
  ballRadius:10,
  context:context,
});




  // this.x, this.y, this,radius within this.context.arc

function animate(){
  console.log(ball);
  context.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.scoot();
  requestAnimationFrame(animate);
}

animate();
// var x = 10;
// var y = 10;
// var width = 50;
// var height = 50;

// requestAnimationFrame(function gameLoop() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   context.fillRect(x++, y, width, height);
//   context.fillStyle="white";
//   context.fill();
//   drawBall();
//   console.log("sucess");
//   requestAnimationFrame(gameLoop);
// });
