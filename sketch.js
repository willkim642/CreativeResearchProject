let texts = [];
let textNum = 0;

function preload() {
  texts[0] = 'In early 2020, following the emergence of the Covid-19 pandemic. The world enters a state of lockdown';
  texts[1] = 'You have fully commited to the quarantine lifestyle. You avoid all possible contact with the outside world.';
  texts[2] = 'You work remotely and have thus far lived off of a surplus of supplies hoarded at the beginning of the pandemic.';
  texts[3] = 'However after three months, you have finally depleted the last of your resources. For the first time in a quarter of a year, you MUST leave your home.';
  texts[4] = "You have not met another person face to face since you've holed yourself up in your house. Do you even remember how to talk to people?";
  texts[5] = "You're dreading the feeling of having to talk to someone out loud again but you have to stock your shelves.";
  texts[6] = "In spite of your anxieties, you get up from your bed and begin to head out.";
  texts[7] = 'Day 1: The First Day Out';
}

function setup() {
  createCanvas(640, 480);
  background(0);
  textAlign(CENTER);
  noStroke();
  fill(250);
  textSize(36);
  textFont('Franklin Gothic Medium MS');
  text(texts[textNum], 0, 190, 640,480);
}

function keyPressed() {
  clear();
  background(0);
  textNum += 1;
  text(texts[textNum], 0, 190, 640,480);
  
  if (textNum >= 7) {
    textSize(18);
    text('Hit the button to advance', 335, 450, 400, 100);
  }
}
