// Sliders
/* Circle Radius
  pixelDensity
  fontSize
  Randomness
  Text Input
  fill
  stroke
*/

// Go back to hartmut with the two arrays

var DrawnText;
let font;
let pixelDensity = 8;
let fontSize = 550;
let textTyped = "p5.js";


function preload() {
  font = loadFont("data/WorkSans-SemiBold.ttf");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  textGraphic();
  slider = createSlider(100,900,450);
  slider.position(10,10);
  slider.style('width', '80px');
}

function draw() {
  background(255);
  noStroke();
  fontSize = slider.value();
  textGraphic();
for (let y = 0; y < DrawnText.height; y += pixelDensity) {
    for (let x = 0; x < DrawnText.width; x += pixelDensity) {
      let index = (x + y * DrawnText.width) * 4;
      if (DrawnText.pixels[index] <= 128) {
        fill(0, 155,0);
        ellipse(x, y, 5, 5);
      }
    }
  }
}

function textGraphic() {
  DrawnText = createGraphics(width, height);
  DrawnText.pixelDensity(1);
  DrawnText.background(255);
  DrawnText.fill(0);
  DrawnText.textSize(fontSize);
  DrawnText.textAlign(CENTER);
  DrawnText.textFont(font);
  DrawnText.text(textTyped, DrawnText.width / 2, DrawnText.height / 2);
  DrawnText.loadPixels();
}


function keyReleased() {
     if (keyCode == CONTROL)saveCanvas(gd.timestamp(), 'png');
 }

 function keyPressed() {
   if (keyCode == DELETE || keyCode == BACKSPACE) {
     if (textTyped.length > 0) {
       textTyped = textTyped.substring(0, textTyped.length - 1);
       textGraphic();
 }
}
}

 function keyTyped()  {
   if (keyCode >= 32) {
     textTyped += key;
     textGraphic();
   }
 }
