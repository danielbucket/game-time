var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var paddleHeight = 15;
var paddleWidth = 120;
var paddleX = (canvas.width-paddleWidth)/2;

var keyLeftPressed = false
var keyRightPressed = false


document.addEventListener("keydown", keyDownEvent, false);
document.addEventListener("keyup", keyUpEvent, false);

function keyDownEvent(e) {
    if (e.keyCode == 39) {
        keyRightPressed = true;
    } else if (e.keyCode == 37) {
        keyLeftPressed = true;
    }
};

function keyUpEvent(e) {
    if (e.keyCode == 39) {
        keyRightPressed = false;
    } else if (e.keyCode == 37) {
        keyLeftPressed = false;
    }
};

function drawPaddle() {
  context.beginPath()
  //the -10 on paddleHeight is to lift the paddle off the base just a little bit//
  context.fillRect(paddleX, (canvas.height-paddleHeight-10), paddleWidth, paddleHeight)
  context.fillStyle = "#0045dd"
  context.closePath()
};


function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    drawPaddle()

    if (keyRightPressed && paddleX < canvas.width-paddleWidth) {
      paddleX += 7
    } else if (keyLeftPressed && paddleX > 0) {
      paddleX -= 7
    }
}

requestAnimationFrame(function gameLoop() {
  requestAnimationFrame(gameLoop)
});

//called the setInterval() so there was some drawing happening//
setInterval(draw, 7)

console.log('all the way')
