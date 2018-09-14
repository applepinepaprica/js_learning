let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let balls = [];

canvas.addEventListener('click', test, false);
ctx.fillStyle = 'rgba(0,0,0)';
ctx.fillRect(0,0,width,height);

function random(min,max) {
  let num = Math.floor(Math.random()*(max-min)) + min;
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

function test(event){
  let x = event.pageX;
  let y = event.pageY;
  let element = balls[balls.length - 1];
  if (Math.sqrt((x-element.x)*(x-element.x) + (y-element.y)*(y-element.y)) < element.size) {
    newBall();
  } else {
    alert('Game over!');
  }
}

function newBall() {
  let size = random(10,20);
  let ball = new Ball(
    random(0 + size,width - size),
    random(0 + size,height - size),
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    size
  );
  balls.push(ball);
  ball.draw();
}

newBall();
