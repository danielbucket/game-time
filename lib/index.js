const canvas = document.getElementById('game')
const context = canvas.getContext('2d')
const Paddle = require('./paddle')

document.addEventListener("keydown", keyDownHandler)
document.addEventListener("keyup", keyUpHandler)

var rightPressed = false
var leftPressed = false

let paddle = new Paddle({x:(canvas.width-120)/2, y:canvas.height-15, width:120, height:15, context:context, canvas:canvas})

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    paddle.rightPressed = true
    console.log(rightPressed,'rightPressed')
  } else if (e.keyCode == 37) {
    paddle.leftPressed = true
    console.log(leftPressed, 'leftPressed')
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    paddle.rightPressed = false
    console.log(rightPressed, 'rightPressed')
  } else if (e.keyCode == 37) {
    paddle.leftPressed = false
    console.log(leftPressed,'leftPressed')
  }
}

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height)
  paddle.draw()
  paddle.move()
  requestAnimationFrame(animate)
}

animate();
