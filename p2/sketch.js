let music;
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
  music = loadSound('Late Night Radio.mp3');
  //bg[0] from 'https://collections.carli.illinois.edu/digital/collection/uic_city/id/14326/rec/36'
  backGrounds[0] = loadImage('bg0.jpg');
  //bg[1] from 'https://collections.carli.illinois.edu/digital/collection/uic_city/id/5090/rec/3'
  backGrounds[1] = loadImage('bg1.jpg');
  //bg[2] from https://collections.carli.illinois.edu/digital/collection/uic_city/id/8144/rec/77
  backGrounds[2] = loadImage('bg2.jpg');
  //bg[3] from 'https://collections.carli.illinois.edu/digital/collection/uic_city/id/14601/rec/52'
  backGrounds[3] = loadImage('bg3.jpg');
  npcs[0] = loadImage('npc1.gif');
  playerAnimations[0] = loadImage('playerstand.gif');
  playerAnimations[1] = loadImage('playerwalk.gif');
}

function setup() {
  createCanvas(640, 480);
  frameRate(60);
  music.play();
  textAlign(CENTER);
  noStroke();
  
  
}

function draw() {
  background(220);
  player();
  if (currentScreen == 0) {
    playerYPos = 350;
    image(backGrounds[0], 0, 0, width * 1.2, height * 1);
  }
  if (currentScreen == 1) {
    playerYPos = 340;
    image(backGrounds[1], -190, -280, width * 1.6, height * 1.6);
  }
  if (currentScreen == 2) {
    playerYPos = 335;
    image(backGrounds[2], -300, 0, width *2, height);
  }
  if (currentScreen == 3) {
    playerYPos = 325;
    image(backGrounds[3], 0, 0, width, height);
    image(npcs[0], 400, 300, 125, 125);
    button = createButton('Click to advance');
    button.position(520, 455);
    button.mousePressed(changeScene);
    fill(0);
  }
  noSmooth();
  player();
  let fps = frameRate();
  fill(255);
  stroke(0);
  text("FPS: " + fps.toFixed(0), 30, 20);
}

function changeScene() {
  var href = setParams('./p2');
  window.location.href = href;
}

function player() {
  if (keyIsDown(RIGHT_ARROW)) {
    playerXPos += 2;
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
  if(currentScreen == 3) {
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