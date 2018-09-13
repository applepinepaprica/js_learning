var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var balls = [];

canvas.addEventListener('click', newBall, false);
ctx.fillStyle = 'rgba(0,0,0)';
ctx.fillRect(0,0,width,height);

function random(min,max) {
    var num = Math.floor(Math.random()*(max-min)) + min;
    return num;
}

function Ball(x, y, color, size) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = size;
}

Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
};

function newBall() {
    var size = random(10,20);
    var ball = new Ball(
      random(0 + size,width - size),
      random(0 + size,height - size),
      'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
      size
    );
    balls.push(ball);
    ball.draw();
}

newBall();
