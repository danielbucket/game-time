const canvas = document.getElementById('game')
const context = canvas.getContext('2d')
const Paddle = require('./paddle')
document.addEventListener("keydown", keyDownHandler)
document.addEventListener("keyup", keyUpHandler)


var rightPressed = false
var leftPressed = false

var paddleWidth = 15
var paddleHeight= 120

var paddleX = (canvas.width-paddleWidth)/2

let paddle = new Paddle({x:paddleX, y:canvas.height-paddleHeight, width:paddleWidth, height:paddleHeight, context:context, canvas:canvas})

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height)
  paddle.draw()
  paddle.move()
  requestAnimationFrame(animate)
};

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    paddle.rightPressed = true
    console.log(rightPressed,'rightpressed')
  } else if (e.keyCode == 37) {
    paddle.leftPressed = true
    console.log(leftPressed, 'leftPressed')
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    paddle.rightPressed = false
    console.log(rightPressed, 'Pressed')
  } else if (e.keyCode == 37) {
    paddle.leftPressed = false
    console.log(leftPressed,'leftPressed')
  }
}


animate();
