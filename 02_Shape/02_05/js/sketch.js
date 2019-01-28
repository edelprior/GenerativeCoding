
let tileCount = 10;
let tileWidth;
let strokeColor;
let minRadius = 1;
let maxRadius = 10;
let minStroke = 1;
let maxStroke = 10;
let actRandomSeed = 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  tileWidth = width/tileCount;
  strokeColor  = color(255,0,0, 85);
  rectMode = (CENTER);
  }

function draw() {
  randomSeed(actRandomSeed);
  background(255);;
  noFill();

  for (let gridX = 0; gridX < tileCount; gridX++) {
    for (let gridY = 0; gridY < tileCount; gridY++) {

      let posX = gridX * tileWidth;
      let posY = gridY * tileWidth;

      let circleRaidus = map(constrain(mouseX, 0, width), 0, width, 10,40);
      let circleStroke = map(constrain(mouseY,0,height),0, height, 1,20);

      stroke(strokeColor);
      strokeWeight(circleStroke);

      let shiftX = random(-mouseX, mouseX) / 10;
      let shiftY = random(-mouseY, mouseY) / 10;

      push();
          translate(posX, posY);
          rotate(mouseX / 600);
          rect(0,0,circleRaidus, circleRaidus);
      pop();
    }
  }
}
