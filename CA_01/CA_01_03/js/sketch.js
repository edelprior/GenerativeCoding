// CA_01_03
// Edel Prior
// N00153748
// Brief = Create a book cover with p5 for a book about Generative Design and Color Theory
// Original idea = working with Sine Waves and Color to create an interesting and relevant cover
// simple version of sine wave
// Peeling back the code to understand each variable

function setup() {
  createCanvas(1240, 1748);
  noFill();
  background(255);
  //  noLoop();
}

function draw() {
  background(255);
  makeRibbons();
  frameRate(2);
}

//-----
function makeRibbons() {
  stroke(255, 0, 0);
  strokeWeight(5);
  var startY = height / floor(random(1, 30)); // random position on the Y axis each framerate

  for (var i = 0; i < 1; i++) {
    //rotate(90); // experimenting with overall location of the wave
    var amount = 500;
    var frequency = random(1.0) / 15;
    var offset = random(200) + 5;
  }

  beginShape();
  vertex(0, startY);
  for (var c = 1; c < amount; c++) {
    var sinoffset = sin(frequency * c);
    var sinX = c * (width / amount);
    var sinY = startY + sinoffset * offset;

    bezierVertex(sinX, sinY, sinX, sinY - 1, sinX, sinY);
  }
  endShape();
}
