const canvas = document.getElementById('game')
const context = canvas.getContext('2d')
const Paddle = require('./paddle')
const Brick = require('./bricks.js');
const Ball = require('./ball.js');

document.addEventListener("keydown", keyDownHandler)
document.addEventListener("keyup", keyUpHandler)

var rightPressed = false
var leftPressed = false

let paddle = new Paddle({x:(canvas.width-120)/2, y:canvas.height-15, width:120, height:15, context:context, canvas:canvas})

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    paddle.rightPressed = true
  } else if (e.keyCode == 37) {
    paddle.leftPressed = true
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    paddle.rightPressed = false
  } else if (e.keyCode == 37) {
    paddle.leftPressed = false
  }
}


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
let active = true;
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

var brickCount = bricks.length;

function drawBricks(bricks){
  bricks.forEach(function(brick){
    brick.draw();
  });
}

function brickBallCollisionDetectiion (bricks){
  bricks.forEach(function(brick){
    if(brick.active === true){
      brickBallCollision(brick);
    }
  });
}

function brickBallCollision(brick){
  if(
    ball.y > brick.y  &&
    ball.y < brick.y+brick.height &&
    ball.x > brick.x &&
    ball.x < brick.x+brick.width)
    {
        brick.death();
        brickCount--;
        gameProgress();
        console.log(brickCount)

      // prevent animate from drawing the brick
      // no longer can collide with the ball
      //  property on brick object = false
      // when death() = death: true
      // if death = true draw
      // (even if you don't draw the brick, it'll see collide)
      // filter for extracting desired objects
    }
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

let currentLevel = 0;

function levelUp(){
  currentLevel++;
  ball.reset(currentLevel);
  console.log("level advance");
  brickCount = bricks.length;

}

function gameProgress(){
  if(brickCount === 0){
    for(var i = 0; i < bricks.length; i++){
      bricks[i].revert();
    }
    levelUp();
  }
}

function animate(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  ballWallCollision();
  // point
  brickBallCollisionDetectiion(bricks);
  // loop over each brick in bricks and call the function
  // brick is undefined (doesn't exist), only brickS does
  ball.draw();
  ball.scoot();
  drawBricks(bricks);
  paddle.draw();
  paddle.move();
  // gameProgress();
  requestAnimationFrame(animate);
}

animate();
