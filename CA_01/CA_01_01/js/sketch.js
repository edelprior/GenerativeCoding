// CA_01_01
// Edel Prior
// N00153748
// Brief = Create a book cover with p5 for a book about Generative Design and Color Theory
// Original idea = working with Sine Waves and Color to create an interesting and relevant cover
// Inspiration ==  http://bl.ocks.org/brendandawes/08a0b5e3867426dad100

var colors = []; // empty array to put color objects in

// * * *

function setup() {
  createCanvas(windowWidth, windowHeight); // predefined P5 variables
  noFill(); // sinewaves are made with stroke only as they're bezier curves
  addColors();
  background(255);
  noLoop(); // useful to keep the draw function running when in development
}

// * * *

function addColors() {
  var c;
  c = color(0, 138, 176);
  colors[0] = c;
  c = color(241, 100, 93);
  colors[1] = c;
  c = color(0, 176, 133);
  colors[2] = c;
  c = color(233, 108, 31);
  colors[3] = c;
  c = color(241, 114, 172);
  colors[4] = c;
  c = color(222, 57, 108);
  colors[5] = c;
  c = color(231, 206, 0);
  colors[6] = c;
  c = color(72, 22, 108);
  colors[7] = c;
  c = color(44, 164, 74);
  colors[8] = c;
} // adding an array of color objects to a variable

function getRandomColor() {
  var i = Math.floor(random(colors.length));
  var c = colors[i];
  return c;
}

// * * *

function draw() {
  //  background(255); // draws each time with noLoop() turned off
  makeRibbons();
}
// * * *

function makeRibbons() {
  for (var i = 0; i < random(10) + 10; i++) {
    var strokeW = random(3) + 3;

    var amount = 500; // controls the accordian pleat of the wave
    var frequency = random(1.0) / 15; // controls how erratic each wave is
    var offset = random(200) + 5;

    var col = getRandomColor();

    strokeWeight(strokeW);
    stroke(col, 180);
    var startY = height / 2;
    beginShape();
    vertex(0, startY);
    for (var c = 1; c < amount; c++) {
      var sinoffset = sin(frequency * c); // sin returns -1 - +1
      var sinX = c * (width / amount);
      var sinY = startY + sinoffset * offset;
      bezierVertex(sinX, sinY, sinX, sinY - 1, sinX, sinY);
    }
    endShape();
  }
}
