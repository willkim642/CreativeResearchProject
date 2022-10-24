//player variables
x = -150;
y = 350;

function setup() {
  createCanvas(700, 500);
  frameRate(60);
  noStroke();
}

function draw() {
  background(0);
  playerActions();
  push();
  rect(x, y, 100);
  pop();
}

function playerActions() {
  x += 2;
  
  if (x >= 800) {
    x = -150;
  }
}
