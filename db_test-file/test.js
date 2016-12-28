var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext('2d')
var x = canvas.width/2
var y = canvas.height-20
var dx = 1 //horizontal travel speed
var dy = -2 //vertical travel speed
//dx plus dy determines the direction of travel
var ballRadius = 10

var paddleWidth = 75
var paddleHeight = 10
var paddleX = (canvas.width-paddleWidth/2)
var rightPressed = false
var leftPressed = false
//paddleLeft needs to move the paddle left as far as the left edge
var paddleLeft =
//paddleRight needs to move the paddle right as far as the right edge
var paddleRight =
//leftPaddleLimit needs to establish a left edge that it cannot move beyond.
//needs to result in 'leftPressed = false' when the limit is reached
var leftPaddleLimit =
//rightPaddleLimit needs to establish a right edge that it cannot move beyond
//needs to result in 'rightPressed = false' when the limit is reached
var rightPaddleLimit = 

setInterval(draw, 10)

document.addEventListener('keydown', keyDownHandler, false)
document.addEventListener('keyup', keyUpHandler, false)

function keyDownHandler(e) {
  if(e.keycode = 39) {rightPressed = true}
  else if (e.keycode = 37) {leftPressed = true}
}

function keyUpHandler(e) {
  if(e.keycode = 39) {rightPressed = false}
  else if (e.keycode = 37) {leftPressed = false}
}

function movePaddle() {
  if(leftPressed = true) {}
}

function drawBall() {
  ctx.beginPath()
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD"
  ctx.fill()
  ctx.closePath()
}

function drawPaddle() {
  ctx.beginPath()
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight)
  ctx.fillStyle = '#f095dd'
  ctx.fill()
  ctx.endPath()
}

//trying to draw a second ball
// drawBall.prototype.newBall = function() {
//   if (drawBall.count <= 2) {drawBall++}
// }

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawBall()

//if statement that determines if the ball is too high (hehe, too high)
if (y + dy > canvas.height-ballRadius || y + dy < ballRadius) {dy = -dy}
//if statement that determines if the ball is too far left or right
if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {dx = -dx}

  x += dx
  y += dy

  drawPaddle()
}


// ctx.beginPath();
// ctx.rect(20, 40, 25, 25);
// ctx.fillStyle = "#FFE000";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(50, 50, 15, Math.PI*2, false);
// ctx.fillStyle = "#B2E2E2";
// ctx.fill();
// ctx.closePath();
