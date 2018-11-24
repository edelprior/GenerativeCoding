// ----- Introducing Color Interpolation on the Sine Waves

// * * * * *
// Variables used for bottom layer type
// * * * * *

let inputText = "Generative Gestaltung";
let fontSize = 360;
let spacing = 9; // line height
let kerning = 0.95; // between letters
let textImg;
let font;
let largeText = ["Gener ative Design"];

// * * *
function preload() {
  font = loadFont("data/WorkSans-ExtraLight.ttf");
  font2 = loadFont("data/WorkSans-Black.ttf");
}

function setup() {
  createCanvas(1240, 1748);
  background(247, 247, 247);
  noFill();
}

function draw() {
  drawLetters();
  makeSineWave();

  // * * * * *
  // Creating the graphic of text behind
  // * * * * *
  //function makeTextImage() {
  //let textImg;
  // Controls the small words "generative"
  textImg = createGraphics(1240, 1748);
  textImg.pixelDensity(1);
  textImg.background(255);
  textImg.textFont(font2);
  textImg.textSize(fontSize);
  textImg.text(largeText, 0, 160, 100, 2000);
  // don't need load pixels?

  function drawLetters() {
    var x = 0;
    var y = 1;
    var counter = 10;

    while (y < 1748) {
      var imgX = round(map(x, 0, width, 0, textImg.width));
      var imgY = round(map(y, 0, height, 0, textImg.height));
      var c = color(textImg.get(imgX, imgY));
    }

    push();
    translate(x, y);

    if ((imgX = (255, 0, 0))) {
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
    var strokeW = random(25);

    var amount = 500;
    //  var frequency = random(0.75) / 15;
    var frequency = 0.04;

    //    var offset = random(200) + 5;
    var offset = 105;

    strokeWeight(strokeW);

    // here for color Interpolation
    stroke(
      random(100, 255),
      random(200, 255),
      random(250, 255),
      random(85, 100)
    );

    // ---
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
