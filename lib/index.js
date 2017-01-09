
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const Brick = require('./bricks.js');
const Ball = require('./ball.js');


// let ball = new Ball({
//   x: canvas.width/2,
//   y: canvas.height/2,
//   ballRadius:10,
//   context:context,
//   canvas: canvas,
// });

let ballOptionOverwrites = {
  x: canvas.width/2,
  y: canvas.height/2,
  ballRadius:10,
  context:context,
  canvas: canvas,
}

let ball = new Ball(ballOptionOverwrites);

// let ball = new Ball(10, 20, 5)


var bricks = [];

let height = 10;
let width = 60;
let paddingX = 50;
let paddingY = 20;
let spacing = 10;
let spacingX = width + spacing;
let spacingY = height + spacing;
let brickRows = 4;
let brickCols = 7;

for(let cols = 0; cols < brickCols; cols++){
  for(let rows = 0; rows < brickRows; rows++){
    let x = paddingX+spacingX*cols;
    let y = paddingY+spacingY*rows;
    bricks.push(new Brick({x:x,y:y,width:width, height:height, context:context}));
  }
}

// for(i = 1; i < 10; i++){
//   x = 60*i;
//   bricks.push(new Brick({x:x,y:10, context:context}));
// }
//
//
// for(i = 1; i < 10; i++){
//   x = 60*i;
//   bricks.push(new Brick({x:x,y:30, context:context}));
// }
//
// for(i = 1; i < 10; i++){
//   x = 60*i;
//   bricks.push(new Brick({x:x,y:50, context:context}));
// }

function drawBricks(bricks){
  bricks.forEach(function(brick){
    brick.draw();
  });
}


// function brickCollisionDetection(){
//   if(ballRadius > x )
// }

function ballWallCollision(){
  if(ball.y > canvas.height){
    ball.scootRevY();
  }
  if(ball.x + ball.ballRadius > canvas.width){
    ball.scootRevX();
  }
  if(ball.y < 0){
    ball.scootRevY();
  }
  if(ball.x < 0){
    ball.scootRevX();
  }
}



  // this.x, this.y, this,radius within this.context.arc

function animate(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  ballWallCollision();
  ball.draw();
  ball.scoot();
  drawBricks(bricks);

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
