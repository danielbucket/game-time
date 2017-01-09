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

// detect collision on ball and brick call death on ballbrick Collision

Brick.prototype.death = function(){
  this.active = false;
};

module.exports = Brick;
