//player variables
x = 50;
y = 400;

function setup() {
    createCanvas(700, 500);
}

function draw() {
    background(255);
    text('p5.js sketch here', width / 2, height / 2);
    textAlign(CENTER);
    playerActions();
    push();
    rect(x, y, 50);
    pop();
}

function playerActions() {
    if (keyIsDown(LEFT_ARROW)) {
        x -= 2.5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x += 2.5;
    }
}