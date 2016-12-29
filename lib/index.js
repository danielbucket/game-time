var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var x = 100;
var y = 100;
var width = 10;
var height = 10;

requestAnimationFrame(function gameLoop() {
  context.fillRect(x++, y+=1, width, height);
  requestAnimationFrame(gameLoop);
});
