const canvas = document.getElementById('game')
const context = canvas.getContext('2d')

document.addEventListener("keydown", keyDownHandler)
document.addEventListener("keyup", keyUpHandler)

var rightPressed = false
var leftPressed = false

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true
    console.log('rightpressed')
  } else if (e.keyCode == 37) {
    leftPressed = true
    console.log('downPressed')
  }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
      rightPressed = false
      console.log('leftPressed')
    } else if (e.keyCode == 37) {
      leftPressed = false
      console.log('upPressed')
    }
  }

function paddleCollision(paddleX) {
  this.paddleX = paddleX
}

//it doesn't appear that the machine is reading this prototype()
paddleCollision.prototype.paddleMover = function() {
  if (rightPressed && this.paddleX < canvas.width-15) {
      this.paddleX += 10
  } else if (leftPressed && this.paddleX > 0) {
      this.paddleX -= 10
  }
}

module.exports = paddleCollision
