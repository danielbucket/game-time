const canvas = document.getElementById('game')
const context = canvas.getContext('2d')

var paddleX = (canvas.width - canvas.x)/2
var paddleY = (canvas.height-15)

const Paddle = require('./paddle.js')
let paddle = new Paddle({x:(canvas.width-15)/2, y:canvas.height-20, width: 15, height: 120, context:context});

const paddleCollision = require('./paddle-coll-move.js')
let paddleCollision = new paddleCollision()


function animate(){
  context.clearRect(0,0,canvas.width,canvas.height)
  paddle.draw()
  requestAnimationFrame(animate)
};

animate();
