// CA_01_10
// Edel Prior
// N00153748
// Brief = Create a book cover with p5 for a book about Generative Design and Color Theory
// Changed Text to suit A4 Book Cover
// Different variations with each reload as the colors of the sine waves are random

var inputText = "Generative Gestaltung";
var fontSize = 400;
var spacing = 12; // line height
var kerning = 0.4; // between letters
var textImg;
var font;
var firstWord = ["Gener"];
var secondWord = ["ative"];
var thirdWord = ["Design"];
var canvasWidth = 1240;
var canvasHeight = 1748;
// * * *

function preload() {
  font = loadFont("data/WorkSans-ExtraLight.ttf");
  font2 = loadFont("data/WorkSans-Bold.ttf");
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  makeTextImage();
  background(250);
  noFill();
}

function draw() {
  drawletters();
  makeSineWave();
}

function makeTextImage() {
  // Controls the small words "generative"
  textImg = createGraphics(canvasWidth, canvasHeight);
  textImg.pixelDensity(1);
  textImg.background(255);

  textImg.textFont(font2);

  textImg.textSize(36);
  textImg.text(firstWord, -10, 475);

  textImg.textSize(300);
  textImg.text(secondWord, 0, 750);

  textImg.textSize(360);
  textImg.text(thirdWord, 0, 1160);
}

function drawletters() {
  var x = 0;
  var y = 1;
  var counter = 10;

  while (y < 1748) {
    var imgX = round(map(x, 0, width, 0, textImg.width));
    var imgY = round(map(y, 0, height, 0, textImg.height));
    var c = color(textImg.get(imgX, imgY));

    push();
    translate(x, y);
    fill(c);

    var letter = inputText.charAt(counter);
    text(letter, 0, 0, 1000);
    var letterWidth = textWidth(letter) + kerning;
    x += letterWidth;

    pop();

    if (x + letterWidth >= width) {
      x = -1;
      y += spacing;
    }

    counter++;
    if (counter >= inputText.length) {
      counter = 0;
    }
  }
}

function makeSineWave() {
  for (var i = 0; i < 30; i++) {
    var strokeW = random(45, 60);

    var amount = 300;
    var frequency = 0.04;
    var offset = 200;

    //blendMode(MULTIPLY);

    blendMode(LIGHTEST);
    //  blendMode(DARKEST);
    strokeWeight(strokeW);
    stroke(random(255), random(255), random(255));

    var startY = random(5, 1748);

    beginShape();
    vertex(0, startY);
    for (var c = 1; c < amount; c++) {
      var sinoffset = sin(frequency * c);
      var sinX = c * (width / amount);
      var sinY = startY + sinoffset * offset;
      bezierVertex(sinX, sinY, sinX, sinY - 1, sinX, sinY);
    }
    endShape();
   noLoop();
    //  noStroke();
  }
}
