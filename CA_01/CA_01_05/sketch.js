var inputText = "Generative"
var fontSize = 500;
var spacing = 20; // line height
var kerning = 1; // between letters
var fontSizeStatic = false;
var blackAndWhite = false;
var img;
var pointDensity = 1;
var textImg;
var font;
var yoff = 0.0;
var textTyped = ["GENERATIVE DESIGN "];
const colors = [];

function preload() {
  font = loadFont("data/WorkSans-ExtraLight.ttf");
  font2 = loadFont("data/WorkSans-Bold.ttf");
}

function setup() {
  createCanvas(1240, 1748);
  setupText();
  background(255);
  noLoop();
  //noCursor();
//  checkEdges();
}

/// Creating the "image" the text behind
function setupText() {
  // Controls the small words "generative"
  textImg = createGraphics(1240, 1748);
  textImg.pixelDensity(1);
  textImg.background(255);
  textImg.textFont(font2);
//  textImg.textLeading(1);
  textImg.textSize(fontSize);
  textImg.text(textTyped, 0, -20, 400,750);
    textImg.loadPixels();
}


function draw() {
// background(255);
  makeRibbons();
  textImg.loadPixels();
  var x = 0;
  var y = 1;
  var counter = 10;

  while (y < 1748) {

    var imgX = round(map(x, 0, width, 0, textImg.width));
    var imgY = round(map(y, 0, height, 0, textImg.height));
    var co = color(textImg.get(imgX, imgY));

    push();
    translate(x, y);

    if (fontSizeStatic) {
      textSize(fontSize);
      if (blackAndWhite) {
        fill(255);
      }
    }
     else {
      fill(co);
    }

    var letter = inputText.charAt(counter);
    text(letter, -50, 100, 10);
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
}

function getRandomColor() {
  var i = Math.floor(random(colors.length));
  var c = colors[i];
  return c;
}

function makeRibbons() {
  for (var i = 0; i < random(10) + 10; i++) {
    var strokeW = random(3) + 3;

    var amount = 500;
    var frequency = random(1.0) / 15;
    var offset = random(200) + 5;

    var col = getRandomColor();

    strokeWeight(strokeW);
    stroke(col, 180);
    var startY = height / 2;
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
}

 // checkEdges = function() {
 //    if (textImg.width > 1240) {
 //      imgY += textImg.height+100;
 //
 //      }
 //    }
