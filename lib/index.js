const canvas = document.getElementById('game')
const context = canvas.getContext('2d')

var paddleX = (canvas.width - 120)/2
var paddleWidth = 120
var paddleHeight= 15

const Paddle = require('./paddle.js')
let paddle = new Paddle({x:(canvas.width-paddleWidth)/2, y:canvas.height-paddleHeight-10, width: 15, height: 120, context:context})

const paddleCollision = require('./paddle-coll-move.js')
let padMover = new paddleCollision({paddleX:paddleX})

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height)
  //i can't get paddleCollision() to return the new paddleX value
  padMover.paddleMover()
  paddle.draw()
  requestAnimationFrame(animate)
};
animate();
