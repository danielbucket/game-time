var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var paddleHeight = 15;
var paddleWidth = 120;
var paddleX = (canvas.width-paddleWidth)/2;

function drawPaddle() {
  context.beginPath()
  //the -10 on paddleHeight is to rise the paddle off the base just a little bit//
  context.fillRect(paddleX, (canvas.height-paddleHeight-10), paddleWidth, paddleHeight)
  context.fillStyle = "#0045dd"
  context.closePath()
};

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    drawPaddle()
}

requestAnimationFrame(function gameLoop() {
  requestAnimationFrame(gameLoop);
});

//added in the setInterval so there was some drawing happening//
setInterval(draw, 10)

console.log('all the way')
