//Primary code derived from https://editor.p5js.org/cfoss/sketches/u-AqW3SyY
//Face taken from https://www.123rf.com/photo_11261666_worried-young-man-with-hand-on-face.html
let scene = 0;
let img;
let scenes = [
  {
  name: "",
  txt: "*After you finish shopping, you walk up to a visibly tired cashier.*"},
  {
  name: "Cashier",
  txt: "Hi, you find everything okay?"},
  {
  name: "",
  txt: "*You know the cashier is trying to be friendly. But you can tell in their voice they are emotionally bankrupt.*"},
  {
  name: "You",
  txt: "Yes I did thank you."},
  {
  name: "Cashier",
  txt: "Do you have a membership card with us?"},
  {
  name: "You",
  txt: "Nah I don't."}, 
  {
  name: "Cashier",
  txt: "Would you like to sign up for one?"},
  {
  name: "You",
  txt: "No thanks."},
  {
  name: "Cashier",
  txt: "Alright."},
  {
  name: "You",
  txt: "..."},
  {
  name: "",
  txt: "As the cashier bags your things, they begin to make small talk."},
  {
  name: "Cashier",
  txt: "Let me tell you. It has been a rough couple of months."},
  {
  name: "You",
  txt: "Yeah?"},
  {
  name: "Cashier",
  txt: "Yeah I mean my job was already pretty tedious before this Covid thing but this is like a whole new level."},
  {
  name: "Cashier",
  txt: "I could kind of get the Black Friday fervor over a TV or something. But seeing people at each others' throats over TP really changes you."},
  {
  name: "Cashier",
  txt: "But you know, a job's a job. Gotta pay my tuition somehow."},
  {
  name: "You",
  txt: "Oh you're a student? How's that going?"},
  {
  name: "Cashier",
  txt: "Not great. My social life is practically nonexistent."},
  {
  name: "Cashier",
  txt: "I used to hang out with people on campus everyday. Now I'm just in Zoom calls and I don't even know what any of my classmates look like."},
  {
  name: "Cashier",
  txt: "Gotta say, it's been a real vibe killer. Not having to commute is nice. But it takes so much motivation for me to even open up my assignments now."},
  {
  name: "Cashier",
  txt: "My GPA has tanked too."},
  {
  name: "Cashier",
  txt: "It's weird cause on paper, school hasn't changed that much but it suddenly seems so much harder to stay afloat."},
  {
  name: "You",
  txt: "I can only imagine."},
  {
  name: "",
  txt: "*The cashier places the last of your items into a bag. You put your card into the reader to pay.*"},
  {
  name: "Cashier",
  txt: "There you go. Thank you for shopping with us."},
  {
  name: "You",
  txt: "Thank you. Hang in there."},
  {
  name: "Cashier",
  txt: "That's what I'm doing."},
  {
  name: "",
  txt: "*As you walk away, you wonder how it would feel to be a student right now.*"},
  {
  name: "",
  txt: "-End of conversation. Please advance now.-"}
  ];

function preload() {
  img = loadImage('https://i.imgur.com/hvnepk5.png');
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