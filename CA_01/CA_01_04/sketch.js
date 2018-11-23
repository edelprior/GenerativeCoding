

// ----- TRYING TO MAKE A SINE FUNCTION TO CREATE THE GRAPHIC


var inputText = "GEN"
var fontSize = 400;
var spacing = 20; // line height
var kerning = 1; // between letters
var img;
var pointDensity = 1;
var textImg;
var sineImg;
var font;
var yoff = 0.0;
var textTyped = ["generative design"];


function preload() {
  font = loadFont("data/WorkSans-ExtraLight.ttf");
  font2 = loadFont("data/WorkSans-Bold.ttf");
}

function setup() {
  createCanvas(1240, 1748);
  makeTextImage();
  makeSineImage();
  background(255);
  noFill();
}


/// Creating the "image" the text behind
function  makeTextImage() {
  // Controls the small words "generative"
  textImg = createGraphics(1240, 1748);
  textImg.pixelDensity(1);
  textImg.background(255);
  textImg.textFont(font2);
  textImg.textLeading(1);
  textImg.textSize(fontSize);
  textImg.text(textTyped, 0, -20, 400,750);
  textImg.loadPixels();
}

/// Creating the "image" the text behind
function  makeSineImage() {
  // Controls the small words "generative"
  sineImg = createGraphics(1240, 1748);
  sineImg.pixelDensity(1);
  sineImg.background(255);
  sineImg.loadPixels();
  sineImg.makeSineWave();
}




function draw() {
makeSineWave();

  var x = 0;
  var y = 0;
  var counter = 10;

  while (y < windowHeight) {

    var imgX = round(map(x, 0, width, 0, textImg.width));
    var imgY = round(map(y, 0, height, 0, textImg.height));
    var c = color(textImg.get(imgX, imgY));

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
}


function makeSineWave() {
    stroke(255,0,0);
    strokeWeight(5);
    var startY = height /floor(random(1, 30));

  for (var i = 0; i < 1; i++) {
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
  noStroke();
  noLoop();
  }
