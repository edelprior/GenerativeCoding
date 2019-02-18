let DrawnText;
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
  noStroke();
  noFill();
}

function draw() {
  background(215,245,245);

for (let y = 0; y < DrawnText.height; y += pixelDensity) {
    for (let x = 0; x < DrawnText.width; x += pixelDensity) {
      let index = (x + y * DrawnText.width) * 4;
      if (DrawnText.pixels[index] <= 128) {
        fill(2250,215,0);
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
