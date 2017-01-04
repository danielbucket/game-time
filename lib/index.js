console.log('hey look were connected!');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var x = 100;
var y = 100;
// var width = 10;
// var height = 10;


var paddleX = canvas.width-paddleWidth/2;
var paddleHeight = 20;
var paddleWidth = 60;

function drawPaddle() {
  context.beginPath()
  context.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight)
  context.fillStyle = "#0045dd"
  context.fill()
  context.endPath()
};

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    drawPaddle()
}

requestAnimationFrame(function gameLoop() {
  context.fillRect(x++, y+=1, canvas.width, canvas.height);
  requestAnimationFrame(gameLoop);
});
