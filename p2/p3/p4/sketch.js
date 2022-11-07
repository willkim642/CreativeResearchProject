//let music;
let backGrounds = [];
let npcs = [];
let playerAnimations = [];
var player;
var playerXPos = -10;
var playerYPos = 0;
var currentScreen = 0;

function preload() {
  /*song from "Late Night Radio" Kevin MacLeod (incompetech.com)
Licensed under Creative Commons: By Attribution 4.0 License
http://creativecommons.org/licenses/by/4.0/*/
  //music = loadSound('Late Night Radio.mp3');
  //bg[0] from 'https://www.realsimple.com/thmb/aJDUpqoFWZXJdFvU5XPkjjmAV7c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/impulse-buying-2000-d569eacebb0c48fa8766965d0352151c.jpg'
  backGrounds[0] = loadImage('https://i.imgur.com/F3ke5Dz.jpg');
  //bg[1] from 'https://kingrs.com/ourinsight/4-unbreakable-laws-of-grocery-store-aisle-signs/'
  backGrounds[1] = loadImage('https://i.imgur.com/DNpyJA4.jpg');
  //bg[2] from https://collections.carli.illinois.edu/digital/collection/uic_city/id/8144/rec/77
  backGrounds[2] = loadImage('https://i.imgur.com/qkKol0j.jpg');

  npcs[0] = loadImage('https://i.imgur.com/aQQDKuK.gif');
  playerAnimations[0] = loadImage('https://i.imgur.com/nRwLa65.gif');
  playerAnimations[1] = loadImage('https://i.imgur.com/efeVPFq.gif');
}

function setup() {
  createCanvas(640, 480);
  frameRate(60);
  //music.play();
  textAlign(CENTER);
  noStroke();
}

function draw() {
  background(220);
  player();
  if (currentScreen == 0) {
    playerYPos = 360;
    image(backGrounds[0], 0, 0, width , height);
  }
  if (currentScreen == 1) {
    playerYPos = 380;
    image(backGrounds[1], 0, 0, width , height );
  }
  if (currentScreen == 2) {
    playerYPos = 390;
    image(backGrounds[2], -300, 0, width *2, height);
    image(npcs[0], 530, 380, 125, 125)
    fill(255);
    rect(530, 350, 100, 30);
    fill(0);
    text("Excuse me?", 530, 360, 100, 30)
  }
  noSmooth();
  player();
  let fps = frameRate();
}

function player() {
  if (keyIsDown(RIGHT_ARROW)) {
    playerXPos += 8;
    image(playerAnimations[1], playerXPos, playerYPos, 125, 125);
    
  }
  else if (keyIsDown(LEFT_ARROW)) {
    push();
    playerXPos -= 2;
    scale(-1, 1);
    image(playerAnimations[1], -playerXPos, playerYPos, -125, 125);
    pop();
  }
  
  else {
    image(playerAnimations[0], playerXPos, playerYPos, 125, 125);
  }
  
  if(currentScreen == 0) {
    if (playerXPos <= -95) {
    playerXPos = -90;
    }
  }
  if(currentScreen == 2) {
    if (playerXPos >= width - 30) {
    playerXPos = width - 40;
    }
  }
  if (playerXPos >= width + 10) {
    currentScreen += 1;
    playerXPos = -90;
  }
  if (playerXPos <= -95) {
    currentScreen -= 1
    playerXPos = width;
  }
}
