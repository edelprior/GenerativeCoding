// CA_01_05
// Edel Prior
// N00153748
// Brief = Create a book cover with p5 for a book about Generative Design and Color Theory
// Original idea = working with Sine Waves and Color to create an interesting and relevant cover
// Attempt at creating a sine wave object as an image in p5 using createGraphics()
// large amount of trigonometry involved with the sine wave so had to rethink how to bring in the Wave

var inputText = "GEN";
var fontSize = 200;
var spacing = 20; // line height
var kerning = 1; // between letters
var img;
var pointDensity = 1;
var textImg;
var font;
var yoff = 0.0;
var textTyped = ["generative....design"];

function preload() {
  font = loadFont("data/WorkSans-ExtraLight.ttf");
  font2 = loadFont("data/WorkSans-Bold.ttf");
}

function setup() {
  createCanvas(1240, 1748);
  makeTextImage();
  background(255);
  //  noFill();
}

/// Creating the "image" the text behind
function makeTextImage() {
  // Controls the small words "generative"
  textImg = createGraphics(1240, 1748);
  textImg.pixelDensity(1);
  textImg.background(0);
  textImg.stroke(255);
  textImg.textFont(font2);
  //textImg.textLeading(1);
  textImg.textSize(fontSize);
  textImg.text(textTyped, 0, -20, 400, 250);
  textImg.loadPixels();
}

function draw() {
  //  makeRibbons();
  var x = 0;
  var y = 0;
  var counter = 10;

  while (y < 1748) {
    var imgX = (0, 0, 0, 1240);
    var imgY = (0, 0, 0, 1748);
    var c = textImg.get(imgX, imgY);
    textImg.get(imgX, imgY);

    push();
    translate(x, y);
    fill(c); // here to put the if function

    var letter = inputText.charAt(counter);
    text(letter, 10, 80, 450);
    var letterWidth = textWidth(letter) + kerning;
    x += letterWidth;

    pop();

    if (x + letterWidth >= width) {
      x = 10;
      y += spacing;
    }

    counter++;
    if (counter >= inputText.length) {
      counter = 0;
    }
  }
  textImg.loadPixels();
}

function makeRibbons() {
  // stroke(255, 0, 0);
  noFill();
  var startY = height / 2;
  startY += 1;
  var frequency = 0.03; // slightest change to 0.04
  var offset = 205;

  beginShape();
  vertex(0, startY);
  for (var x = 11; x < windowWidth; x++) {
    var sinoffset = sin(frequency * x);
    var sinX = x * (width / 600);
    var sinY = startY + sinoffset * offset;
    sinX += 1;
    bezierVertex(sinX, sinY, sinX, sinY - 1, sinX, sinY);
  }
  endShape();
}
