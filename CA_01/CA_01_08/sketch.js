// - - - - -
// - - - - -  TYPE WITH INTEROPLOATION

//

var inputText = "Generative Gestaltung";
var fontSize = 280;
var spacing = 20; // line height
var kerning = 0.55; // between letters
var textImg;
var font;
var firstWord = ["Gener"];
var secondWord = ["ative"];
var thirdWord = ["Des"];
var fourthWord = ["ign"];
var A4Width = 1240;
var A4Height = 1748;
// * * *

function preload() {
  font = loadFont("data/WorkSans-ExtraLight.ttf");
  font2 = loadFont("data/WorkSans-Bold.ttf");
}

function setup() {
  createCanvas(A4Width, A4Height);
  makeTextImage();
  background(255);
  noFill();
}

function draw() {
  drawletters();
  //  makeSineWave();
}

function makeTextImage() {
  // Controls the small words "generative"
  textImg = createGraphics(1240, 1748);
  textImg.pixelDensity(1);
  textImg.background(255);

  textImg.textFont(font2);
  //  textImg.textSize(fontSize);

  from = color(236, 47, 94);
  to = color(47, 236, 189);
  c1 = lerpColor(from, to, 0.33);
  c2 = lerpColor(from, to, 0.66);

  textImg.fill(from);
  textImg.textSize(350);
  textImg.text(firstWord, 0, 275);

  textImg.fill(c1);
  textImg.textSize(390);
  textImg.text(secondWord, 0, 615);

  textImg.fill(c2);
  textImg.textSize(280);
  textImg.text(thirdWord, 0, 1230);

  textImg.fill(to);
  textImg.textSize(280);
  textImg.text(fourthWord, 500, 1230);
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
    textSize(18);
    text(letter, 0, 0);
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
  for (var i = 0; i < 1; i++) {
    var amount = 200;
    var frequency = 0.04;
    var offset = 100;

    strokeWeight(0.6);
    stroke(255, 0, 0);

    var startY = 750;

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
  }
}
// controlled color set
function shakeColors() {
  c1 = color(random(0, 10), random(0, 200), 100);
  c2 = color(random(10, 300), 100, random(0, 100));
}

function mouseReleased() {
  shakeColors();
}

function keyPressed() {
  if (key == "s" || key == "S")
    saveCanvas(
      canvas,
      gd.timestamp() + "_MouseX_" + mouseX + "_MouseY_" + mouseY,
      "png"
    );
}
