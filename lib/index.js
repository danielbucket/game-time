const canvas = document.getElementById('game')
const context = canvas.getContext('2d')

var paddleX = (canvas.width - canvas.x)/2
var paddleY = (canvas.height-15)

const Paddle = require('./paddle.js')
let paddle = new Paddle({x:100, y:200, width: 15, height: 120, context:context});


function animate(){
  context.clearRect(0,0,canvas.width,canvas.height)
  paddle.draw()
  requestAnimationFrame(animate)
};

animate();
