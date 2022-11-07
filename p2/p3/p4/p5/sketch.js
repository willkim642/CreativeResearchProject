//Primary code derived from https://editor.p5js.org/cfoss/sketches/u-AqW3SyY
//Face taken from https://www.123rf.com/photo_11261666_worried-young-man-with-hand-on-face.html
let scene = 0;
let img;
let scenes = [
  {
  name: "",
  txt: "*This person appears visibly distraught*"},
  {
  name: "You",
  txt: "Hey are you okay?"},
  {
  name: "Stranger",
  txt: "Stay away!"},
  {
  name: "You",
  txt: "Hey what's your deal?"},
  {
  name: "Stranger",
  txt: "Sorry. I'm just a bit paranoid given what's going on right now."}, 
  {
  name: "You",
  txt: "It's all good."},
  {
  name: "Stranger",
  txt: "You know, I work at a hospital and I think being surrounded by what's going on is taking it's toll on me mentally."},
  {
  name: "Stranger",
  txt: "I've just been so worried about catching this thing. And who knows how much longer this'll go on for. It's made me a little reclusive."},
  {
  name: "You",
  txt: "Hey, I get it."},
  {
  name: "Stranger",
  txt: "It's pretty terrifying, I just started working there and it's crazy how things got so downhill so fast."},
  {
  name: "You",
  txt: "I can only imagine. The news paints a pretty scary picture."},
  {
  name: "Stranger",
  txt: "Yeah. It's pretty bad when you're witnessing it in person. Truth be told, even though we talk all safety precautions, I feel like it's only a matter of time before I catch it."},
  {
  name: "Stranger",
  txt: "I've never been a paranoid person but ever since the pandemic started I've become really on edge."},
  {
  name: "Stranger",
  txt: "In fact other than work, this is only like my second or third time leaving my house."},
  {
  name: "You",
  txt: "I haven't left my home in three months."},
  {
  name: "Stranger",
  txt: "For real?"},
  {
  name: "You",
  txt: "Yeah, I stockpiled on stuff and I only now have to get some more."},
  {
  name: "Stranger",
  txt: "Huh..."},
  {
  name: "Stranger",
  txt: "Man it's crazy."},
  {
  name: "You",
  txt: "Hmm?"},
  {
  name: "Stranger",
  txt: "For so many months now I've been so standoffish and always alarmed."},
  {
  name: "Stranger",
  txt: "It feels good to talk it out with someone, even if I don't know them."},
  {
  name: "",
  txt: "*You've mostly been passive in this conversation but you agree, you feel a little bit better than you did before.*"},
  {
  name: "Stranger",
  txt: "Thanks for listening to my rant. Sorry to have bothered you during your shopping."},
  {
  name: "You",
  txt: "No problem man."},
  {
  name: "",
  txt: "*As you walk away, you wonder if your conversation with that man really will help him become more relaxed.*"},
  {
  name: "",
  txt: "*You look back and see the man walking around with a more confident stride. Only to hear him scream as an unmasked customer turns the corner of the aisle.*"},
  {
  name: "You",
  txt: "..."},
  {
  name: "",
  txt: "*You hope for both your sakes this pandemic will be a thought of the past soon.*"},
  {
  name: "",
  txt: "*Regardless, it appears you're not the only one who's had their social skills negatively impacted by the pandemic.*"},
  {
  name: "",
  txt: "-End of conversation. Please advance now.-"},
  ];

function preload() {
  img = loadImage('https://i.imgur.com/8b6njjE.png');
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