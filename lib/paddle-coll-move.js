
function paddleCollision() {
  if (rightPressed && paddleX < canvas.width-paddleWidth) {
      paddleX += 10
  } else if (leftPressed && paddleX > 0) {
      paddleX -= 10
  }

  if (upPressed && paddleY < canvas.height-paddleHeight) {
    paddleY += 10
  } else if (downPressed && paddleY > 0) {
    paddleY -= 10
  }
}
