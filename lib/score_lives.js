function scoreLife(options) {
  this.context = options.context
  this.gS = options.gS
  this.gL = options.gL
}

scoreLife.prototype.scoreScript = function() {
  this.context.font = '16px Arial'
  this.context.fillStyle = '#ff6b00'
  this.context.fillText('Score: '+this.gS, 8, 20)
}

scoreLife.prototype.livesScript = function() {
  this.context.font = '16px Arial'
  this.context.fillStyle = '#ff6b00'
  this.context.fillText('Lives: ' +this.gL, 300, 20)
}

module.exports = scoreLife
