const canvas = document.getElementById('game')
const context = canvas.getContext('2d')
const Paddle = require('./paddle.js')
const Brick = require('./bricks.js')
const Ball = require('./ball.js')
const scoreLife = require('./score_lives.js')

var rightPressed = false
var leftPressed = false
var score = 0
var lives = 4

document.addEventListener("keydown", keyDownHandler)
document.addEventListener("keyup", keyUpHandler)

let paddle = new Paddle({
  x:(canvas.width-120)/2,
  y:canvas.height-15,
  width:120,
  height:15,
  context:context,
  canvas:canvas,
  lP:leftPressed,
  rP:rightPressed
})
let livesScore = new scoreLife({
  context:context,
  canvas:canvas,
  gS:score,
  gL:lives,
  width:canvas.width
})
let ballOptionOverwrites = {
  x: canvas.width/2,
  y: canvas.height/2,
  ballRadius:10,
  context:context,
  canvas: canvas,
}
let ball = new Ball(ballOptionOverwrites);

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

var bricks = [];
let height = 10;
let width = 60;
let paddingX = 50;
let paddingY = 40;
let spacing = 10;
let spacingX = width + spacing;
let spacingY = height + spacing;
let brickRows = 9;
let brickCols = 8;
// let paddingX = canvas.width-(spacingX*brickRows)

for(let cols = 0; cols < brickCols; cols++){
  for(let rows = 0; rows < brickRows; rows++){
    let x = paddingX+spacingX*cols;
    let y = paddingY+spacingY*rows;
    bricks.push(new Brick({x:x,y:y,width:width, height:height, context:context}));
  }
}

function drawBricks(bricks){
  bricks.forEach(function(brick){
    brick.draw()
  });
}

function brickBallCollisionDetectiion (bricks){
  bricks.forEach(function(brick){
    brickBallCollision(brick);
  });
}

function brickBallCollision(brick){
  if(
    ball.y > brick.y  &&
    ball.y < brick.y+brick.height &&
    ball.x > brick.x &&
    ball.x < brick.x+brick.width)
    { console.log("boom");
      // here is where collision happens (ball -> brick)
      // brick needs to die here...
      brick.death();
      // prevent animate from drawing the brick
      // no longer can collide with the ball
      // death property on brick object = false
      // when death() = death: true
      // if death = true draw
      // (even if you don't draw the brick, it'll see collide)
      // filter for extracting desired objects
    }
  }

  // 1. Death would be called on draw


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

function animate(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  ballWallCollision()
  ball.draw()
  ball.scoot()
  drawBricks(bricks)
  brickBallCollisionDetectiion(bricks)
  paddle.draw()
  paddle.move()
  livesScore.scoreScript()
  livesScore.livesScript()
  requestAnimationFrame(animate)
}
animate();
