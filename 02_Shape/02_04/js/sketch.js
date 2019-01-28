
let tileCount = 25;
let tileWidth;
let shapes;


function preload() {
  shapes = [];
  shapes.push(loadImage('data/shape.svg'));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // set the current shape to the first in the array
  currentShape = shapes[0];
  tileWidth = width / tileCount;
  tileHeight = height / tileCount;
  angleMode = (DEGREES);
//  imageMode = (CENTER);
}

function draw() {
background(250,215,0);


for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {


      push();

      let posX = tileWidth * gridX + tileWidth;
      let posY = tileHeight * gridY + tileWidth;

      let angle = atan2(mouseY - posY, mouseX - posX);

      translate(posX, posY);
      rotate(angle);
      image(shapes[0], 0, 10, 10, 15,15);
      pop();
    }
  }
}
