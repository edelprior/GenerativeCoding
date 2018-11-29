// ----- TRYING TO MAKE A SINE FUNCTION TO CREATE THE GRAPHIC

// * * * * *
// Variables used for bottom layer type
// * * * * *

var inputText = "Generative Gestaltung";
var fontSize = 360;
var spacing = 10; // line height
var kerning = 0.55; // between letters
var textImg;
var font;
var textTyped = ["Gener ative Design"];

// * * *

function makeTextImage() {
  // Controls the small words "generative"
  textImg = createGraphics(1240, 1748);
  textImg.pixelDensity(1);
  textImg.background(255);
  textImg.textFont(font2);
  textImg.textSize(fontSize);
  textImg.text(textTyped, 0, 0, 0, 2000);
}
function preload() {
  font = loadFont("data/WorkSans-ExtraLight.ttf");
  font2 = loadFont("data/WorkSans-Bold.ttf");
}

function setup() {
  createCanvas(1240, 1748);
  makeTextImage();
  background(247, 247, 247);
  noFill();
}

function draw() {
  drawletters();
  makeSineWave();
}

// Creating the "image" the text behind

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
    if ((imgY = (255, 0, 0))) {
      fill(0);
    } else {
      fill(c);
    }

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
  for (var i = 0; i < 25; i++) {
    var strokeW = random(30, 50);

    var amount = 200;
    var frequency = 0.04;
    var offset = 200;
    // rotate(30);
    //blendMode(MULTIPLY);

    blendMode(LIGHTEST);
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
    noStroke();
  }
}
