
function setup(){

let canvas = createCanvas(500,500);
colorMode(HSB, 360, 100, 100);
rectMode(CENTER);
noStroke();

}

function draw() {

  // numberOfColumns = floor(map(constrain(mouseX, 0, width), 0, width, 2, 100));
  // numberOfRows = floor(map(constrain(mouseY, 0, height), 0, width, 2, 200));
numberOfColumns = 20;
numberOfRows = 20;
let stepX = width / numberOfColumns;
let stepY = height / numberOfRows;

for (let gridY = 0; gridY < height; gridY += stepY) {
     for (let gridX = 0; gridX < width; gridX += stepX) {
        fill(gridX, height - gridY, 100);
        rect(gridX, gridY, stepX, stepY);
      }
    }
  }



function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(canvas, gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY, 'png');
}
