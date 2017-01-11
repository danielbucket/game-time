function Brick(options){
  this.x = options.x;
  this.y = options.y;
  this.height = options.height|| 10;
  this.width = options.width || 50;
  this.context = options.context;
  this.active = true;

}

Brick.prototype.draw = function(){
  if(this.active == true){
    this.context.beginPath();
    this.context.fillRect(this.x, this.y, this.width, this.height);
    this.context.fillStyle = "white";
    this.context.fill();
    this.context.closePath();
  }
};

Brick.prototype.death = function(){
  this.active = false;
};

Brick.prototype.revert = function(){
  this.active = true;
};


module.exports = Brick;


// on collision change status on brick
// filter through array for healthy  bricks
// draw healthy bricks
