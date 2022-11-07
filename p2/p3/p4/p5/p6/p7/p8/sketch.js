//bg from 'https://collections.carli.illinois.edu/digital/collection/uic_city/id/15390/rec/23'
let bg;
let player;

function preload() {
  bg = loadImage('https://i.imgur.com/xZfmCGb.jpg');
  player = loadImage('https://i.imgur.com/nRwLa65.gif');
}

function setup() {
  createCanvas(640, 480);
  noSmooth();
  image(bg,-650,-80, windowWidth * 1.1, height * 1.2);
  textSize(96);
  fill(255)
  text('End', 220, 100, 100, 100)
}

function draw() {
  image(player, 100, 250, 225,225);
}