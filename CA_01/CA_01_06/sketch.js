// O6

var inputText = "Generative";
var fontSize = 500;
var spacing = 20; // line height
var kerning = 1; // between letters
var fontSizeStatic = false;
var blackAndWhite = false;
var img;
var pointDensity = 8;
var textImg;
var font;
var yoff = 0.0;
var textTyped = ["Generative Design "];

function preload() {
  font = loadFont("data/WorkSans-ExtraLight.ttf");
  font2 = loadFont("data/WorkSans-Bold.ttf");
}

function setup() {
  createCanvas(1240, 1748);
  setupText();
  background(255);
  //noCursor();
  checkEdges();
}

/// Creating the "image" the text behind
function setupText() {
  // Controls the small words "generative"
  textImg = createGraphics(1240, 1748);
  textImg.pixelDensity(1);
  textImg.background(255);
  textImg.fill(255, 0, 0);
  textImg.textFont(font2);
  textImg.textSize(fontSize);
  textImg.text(textTyped, 150, fontSize + 50);
  textImg.loadPixels();
}

function draw() {
  background(255);

  textImg.loadPixels();
  var x = -500;
  var y = 1;
  var counter = 10;

  while (y < 1748) {
    var imgX = round(map(x, 0, width, 0, textImg.width));
    var imgY = round(map(y, 0, height, 0, textImg.height));
    var c = color(textImg.get(imgX, imgY));

    push();
    translate(x, y);

    if (fontSizeStatic) {
      textSize(fontSizeMax);
      if (blackAndWhite) {
        fill(255);
      } else {
        fill(c);
      }
    }
    if (blackAndWhite) {
      fill(255);
    } else {
      fill(c);
    }

    var letter = inputText.charAt(counter);
    text(letter, 0, 0);
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
  //  noLoop();
}

checkEdges = function() {
  if (textImg.width > 1240) {
    imgY += textImg.height + 100;
  }
};
