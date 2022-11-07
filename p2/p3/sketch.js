//Primary code derived from https://editor.p5js.org/cfoss/sketches/u-AqW3SyY
//Face taken from https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg
let scene = 0;
let img;
let scenes = [
  {
  name: "You",
  txt: "Oh god..."},
  {
  name: "",
  txt: "*You've been greeted by someone. Your first physical contact in ages. This should be something to celebrate.*"},
  {
  name: "",
  txt: "*Only problem is, you can't recognize this person!*"},
  {
  name: "",
  txt: "*It would appear that months of faceless conference calls has done a number on your ability to recognize people.*"},
  {
  name: "???",
  txt: "Dude I can't believe it, it's been forever since I've seen you!"}, 
  {
  name: "You",
  txt: "Yeah it sure has been a while..."},
  {
  name: "???",
  txt: "It's been so long I thought you died or something."},
  {
  name: "???",
  txt: "Do you remember who I am man?"},
  {
  name: "You",
  txt: "..."},
  {
  name: "???",
  txt: "It's Jim, we had that one class together?"},
  {
  name: "You",
  txt: "Ah yeah right. Sorry, it's been a while."},
  {
  name: "Jim",
  txt: "No worries man, I get it. To tell you the truth, I've been so cooped up in my place, everyone feels like a stranger nowadays!"},
  {
  name: "You",
  txt: "...No kidding?"},
  {
  name: "Jim",
  txt: "So what's up with you? You look a bit pale, you trying to catch some sun?"},
  {
  name: "You",
  txt: "Actually I'm on my way to the grocery store. I need to restock on some things."},
  {
  name: "Jim",
  txt: "Yeesh, you better hurry up. From what I heard, people are still trying to hoard stuff."},
  {
  name: "You",
  txt: "Yeah man I'll get runni-"},
  {
  name: "Jim",
  txt: "Do you wanna like hang out sometime man?"},
  {
  name: "You",
  txt: "What?"},
  {
  name: "Jim",
  txt: "Y'know cause we're both out and about. We might as well."},
  {
  name: "You",
  txt: "Sorry man, maybe later but like I said, I walked out of my place to get some food."},
  {
  name: "Jim",
  txt: "Oh totally man I get it, let's do something next week."},
  {
  name: "You",
  txt: "..."},
  {
  name: "Jim",
  txt: "See ya later!"},
  {
  name: "",
  txt: "*As you walk away, you start to wonder if you've actually gotten out of bed today or maybe you're still dreaming.*"},
  {
  name: "",
  txt: "*Conversing is a lot stranger than you remember it being...*"},
  {
  name: "",
  txt: "-End of conversation. Please advance now.-"},
  ];

function preload() {
  img = loadImage('https://i.imgur.com/1BjIaoZ.png');
}
function setup() {
  createCanvas(640, 480);
  background(0);
  
}

function draw() {
  image(img, 200, 100, 250, 225)
  fill(255);
  rect(20, 320, 600, 150);
  fill(0, 70, 190);
  rect(10, 300, 180, 40);
  fill(0);
  textSize(25);
  textAlign(LEFT);
  text(scenes[scene].txt, 45, 350, 570, 400);
  text(scenes[scene].name, 30, 310, 160);
}

function keyPressed() {
  scene += 1;
}