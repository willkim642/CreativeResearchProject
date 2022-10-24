var placeHolderText = "This is a text box. Actual dialogue will be here soon!";
let img;

function preload() {
    img = loadImage('smile.png');
}

function setup() {
    createCanvas(700, 500);
    background(0);
    image(img, width / 3, height / 4);
}

function draw() {
    fill(255);
    rect(150, 350, 400, 125)

    fill(0);
    textSize(32);
    textAlign(CENTER, BOTTOM);

    text(placeHolderText, 150, 450, 400);
}
