// document.addEventListener("keydown", keyDownHandler)
// document.addEventListener("keyup", keyUpHandler)

var rightPressed = false
var leftPressed = false

function Paddle(options) {
  this.x = options.x
  this.y = options.y
  this.height = options.height
  this.width = options.width
  this.context = options.context
  this.canvas = options.canvas
}

Paddle.prototype.draw = function() {
    // this.context.beginPath()
  this.context.fillStyle = "#004fdd"
  this.context.fillRect(this.x, this.y, this.height, this.width)
    // this.context.closePath()
}

Paddle.prototype.move = function() {
  if (this.rightPressed && this.x < this.canvas.width-this.width) {
    console.log(this.width)
    this.x += 10
  } else if (this.leftPressed && this.x > 0) {
    this.x -= 10
  }
}

// function keyDownHandler(e) {
//   if (e.keyCode == 39) {
//     rightPressed = true
//     console.log(rightPressed,'rightpressed')
//   } else if (e.keyCode == 37) {
//     leftPressed = true
//     console.log(leftPressed, 'leftPressed')
//   }
// }
//
// function keyUpHandler(e) {
//   if (e.keyCode == 39) {
//     rightPressed = false
//     console.log(rightPressed, 'Pressed')
//   } else if (e.keyCode == 37) {
//     leftPressed = false
//     console.log(leftPressed,'leftPressed')
//   }
// }

module.exports = Paddle
