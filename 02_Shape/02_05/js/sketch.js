
let tileCount = 15;
let tileWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);

  tileWidth = width/tileCount;

  strokeColor  = color(250,215,0);
  rectColor = color(0,0,185);
  rectMode = (CENTER);

  }

function draw() {
  background(255, 245,245);

  for (let gridX = 0; gridX < tileCount; gridX++) {
    for (let gridY = 0; gridY < tileCount; gridY++) {

      let posX = gridX * tileWidth;
      let posY = gridY * tileWidth;

      let rectWidth = map(constrain(mouseX, 0, width), 0, width, 10,60);
      let rectStroke = map(constrain(mouseY,0,height),0, height, 1,30);


      stroke(strokeColor);
      strokeWeight(rectStroke);
      fill(rectColor);
      push();
          translate(posX, posY);
          rotate(mouseX / 100);
        polygon (0, 0,rectWidth,5);
      pop();
    }
  }
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
