const canvas = document.getElementById('game')
const context = canvas.getContext('2d')
const Paddle = require('./paddle')
const Brick = require('./bricks.js')
const Ball = require('./ball.js')

var rightPressed = false
var leftPressed = false
var score = 0

document.addEventListener("keydown", keyDownHandler)
document.addEventListener("keyup", keyUpHandler)

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

function drawBricks(bricks){
  bricks.forEach(function(brick){
    brick.draw()
  });
}

function drawScore() {
  context.font = '16px Arial'
  context.fillStyle = '#ff6b00'
  context.fillText('Score: '+score, 8, 20)
}

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
  paddle.draw()
  paddle.move()
  drawScore()
  requestAnimationFrame(animate)
}
animate();
