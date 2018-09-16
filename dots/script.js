let ballsCanvas = document.getElementById('ballsCanvas');
let buttonCanvas = document.getElementById('buttonCanvas');
let button = document.querySelector('button');
let gameOver = document.getElementById('gameOver');

let ballsctx = ballsCanvas.getContext('2d');
let buttonctx = buttonCanvas.getContext('2d');

let width = ballsCanvas.width = buttonCanvas.width = window.innerWidth;
let height = ballsCanvas.height = buttonCanvas.height = window.innerHeight;

let balls = [];

ballsctx.fillStyle = 'rgba(45,45,45)';
ballsctx.fillRect(0,0,width,height);

buttonctx.fillStyle = 'rgba(210,210,210)';
buttonctx.fillRect(0,0,width,height);

ballsCanvas.addEventListener('click', test, false);
ballsCanvas.style.visibility = "hidden";
gameOver.style.visibility = "hidden";

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
  ballsctx.beginPath();
  ballsctx.fillStyle = this.color;
  ballsctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ballsctx.fill();
};

function test(event){
  let x = event.pageX;
  let y = event.pageY;
  let element = balls[balls.length - 1];
  if (Math.sqrt((x-element.x)*(x-element.x) + (y-element.y)*(y-element.y)) < element.size) {
    ballsCanvas.style.visibility = "hidden";
    buttonCanvas.style.visibility = "visible";
    button.style.visibility = "visible";
  } else {
    ballsCanvas.style.visibility = "hidden";
    buttonCanvas.style.visibility = "visible";
    gameOver.style.visibility = "visible";
    gameOver.innerHTML = "GAME OVER <br/> " + (balls.length - 1);
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

function showBalls() {
  button.style.visibility = "hidden";
  ballsCanvas.style.visibility = "visible";
  buttonCanvas.style.visibility = "hidden";
 
  newBall();
}
