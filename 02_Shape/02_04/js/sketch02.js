
let tileCount = 10;
let tileWidth;
let shapes;


function preload() {
  shapes = [];
  shapes.push(loadImage('data/shape.svg'));
}

function setup() {
  createCanvas(600,600);
  // set the current shape to the first in the array
  currentShape = shapes[0];
  tileWidth = width / tileCount;
  tileHeight = height / tileCount;
  angleMode = (DEGREES);
  imageMode = (CENTER);
}

function draw() {
background(255);
image(shapes[0], 20,20,50,50);

for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
        fill(0);
        stroke(0);
        strokeWeight(4);
        push();

      let posX = tileWidth * gridX + tileWidth / 2;
      let posY = tileHeight * gridY + tileWidth / 2;

      let angle = atan2(mouseY - posY, mouseX - posX);

      translate(posX, posY);
      rotate(angle);
      strokeCap(PROJECT);
      image(shapes[0], 0, 20, 20, 50,50);
      pop();
    }
  }
}
