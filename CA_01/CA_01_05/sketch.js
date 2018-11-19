

// ----- BRINGING THE SINE WAVE IS AN IMAGE THAT IS STORED IN MEMORY


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
  image = loadImage('data/sinewave.png')
}

function setup() {
  createCanvas(1240, 1748);
  makeTextImage();
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




function draw() {


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
 img.loadPixels();
 
}
