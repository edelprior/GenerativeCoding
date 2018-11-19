var inputText = "GEN"
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
var textTyped = ["GEN"];


function preload() {
  font = loadFont("data/WorkSans-ExtraLight.ttf");
  font2 = loadFont("data/WorkSans-Bold.ttf");
}

function setup() {
  createCanvas(1240, 1748);
  setupText();
  background(200);
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

  textImg.loadPixels();
  var x = 0;
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
      }
    }
     else {
      fill(c);
    }

    var letter = inputText.charAt(counter);
    text(letter, 100, 100, 10);
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


 // checkEdges = function() {
 //    if (textImg.width > 1240) {
 //      imgY += textImg.height+100;
 //
 //      }
 //    }
