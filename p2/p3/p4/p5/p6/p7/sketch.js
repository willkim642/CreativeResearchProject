let texts = [];
let textNum = 0;

function preload() {
  texts[0] = 'After leaving the grocery store, you begin to walk home and reflect.';
  texts[1] = "You kind of dreaded leaving your home today and having to face the world."
  texts[2] = "Your trip reminded you of what it's like to interact with people face to face.";
  texts[3] = "It's weird and awkward.";
  texts[4] = "But it's also nice.";
  texts[5] = "Given the circumstances, you won't make too many more excursions like this for the time being.";
  texts[6] = "But you can't wait till the next time.";
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
  
  if (textNum >= 6) {
    textSize(18);
    text('Hit the button to advance', 335, 450, 400, 100);
  }
}