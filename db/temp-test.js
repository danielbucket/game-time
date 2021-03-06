var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var ballRadius = 20
var x = canvas.width/2
var y = canvas.height-30
var dx = 2
var dy = -2

var paddleHeight = 10
var paddleWidth = 75
var paddleX = (canvas.width-paddleWidth)/2

var rightPressed = false
var leftPressed = false

var brickRowCount = 6
var brickColumnCount = 10
var brickWidth = 80
var brickHeight = 20
var brickPadding = 10
var brickOffsetTop = 30
var brickOffsetLeft = 30

var bricks = []
for (c = 0; c < brickColumnCount; c++) {
    bricks[c] = []
    for (r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1}
    }
}

var score = 0

document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)

function collisionDetection() {
    for(c=0; c < brickColumnCount; c++) {
        for(r=0; r < brickRowCount; r++) {
            var b = bricks[c][r]
            if (b.status == 1) {
            if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                dy = -dy
                b.status = 0
                score++
                if (score == brickRowCount*brickColumnCount) {
                  alert('Great Success, Gypsy! Now Sell Me Your Tears')
                  document.location.reload()
                }
              }
            }
        }
    }
}

function drawScore() {
  ctx.font = '16px Arial'
  ctx.fillStyle = '#ff6b00'
  ctx.fillText('SuperShit: '+score, 8, 20)
}

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true
    } if (e.keyCode == 38) {
      upPressed = true
    } if (e.keyCode == 40) {
      downPressed = true
    } else if (e.keyCode == 37) {
        leftPressed = true
    }
}
function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false
    } if (e.keyCode == 38) {
        upPressed = false
    } if (e.keyCode == 40) {
        downPressed = false
    } else if (e.keyCode == 37) {
        leftPressed = false
    }
}
function drawBall() {
    ctx.beginPath()
    ctx.arc(x, y, ballRadius, 0, Math.PI*2)
    ctx.fillStyle = "#0045DD"
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath()
    ctx.rect(paddleX, canvas.height-paddleHeight-10, paddleWidth, paddleHeight)
    ctx.fillStyle = "#7e0000"
    ctx.fill()
    ctx.closePath()
}
function drawBricks() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
          if(bricks[c][r].status == 1) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop
            bricks[c][r].x = brickX
            bricks[c][r].y = brickY
            ctx.beginPath()
            ctx.rect(brickX, brickY, brickWidth, brickHeight)
            ctx.fillStyle = "#0095DD"
            ctx.fill()
            ctx.closePath()
          }
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBall()
    drawPaddle()
    drawScore()
    collisionDetection()
    drawBricks()

    if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx
    }if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy
        }
        else {
            alert("GAME OVER")
            document.location.reload()
        }
    }
    if (rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 10
    } else if (leftPressed && paddleX > 0) {
        paddleX -= 10
    }

    x += dx
    y += dy
}

setInterval(draw, 10);
