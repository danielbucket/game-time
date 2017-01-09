function DrawScore(options) {
  this.context = options.context
  this.gS = options.gS
}

DrawScore.prototype.hooligan = function() {
  console.log('drawScore');
  this.context.font = '16px Arial'
  this.context.fillStyle = '#ff6b00'
  this.context.fillText('Score: '+gS, 8, 20)
}


module.exports = DrawScore




// function drawScore(gS, context) {
//   console.log('drawScoring');
//   this.context.font = '16px Arial'
//   this.fillStyle = '#ff6b00'
//   this.context.fillText('Score: '+gS, 8, 20)
// }
