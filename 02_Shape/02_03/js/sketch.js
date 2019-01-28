
var seedNum = 0;
var noOfShapes = 30;
var shapeWidth = 0;
var shapeHeight = 0;

// The 'setup' function is only called once. Everything within the function is executed once
function setup() {
   createCanvas(windowWidth, windowHeight);
  shapeWidth = width / noOfShapes;
  shapeHeight = height / noOfShapes;
  rectMode(CENTER);
}
function draw() {
  background(0,0,125);
  randomSeed(seedNum);
    for (var y = 0; y <= noOfShapes; y++) {
    for (var x = 0; x <= noOfShapes; x++) {
      let rand = Math.floor(random(0, 2));
      push();
      translate(x * shapeWidth, y * shapeHeight);
      fill(250,215,0);
      strokeCap(PROJECT);
      stroke(250,215,0)
      if (rand === 0) {
        strokeWeight(map(mouseX, 0, width, 1, 10));
        line(-shapeWidth /4 , shapeHeight/ 4, shapeWidth/4, -shapeHeight/4);
      } else {
        strokeWeight(map(mouseY, 0, height, 1, 10));
        line(-shapeWidth / 4, -shapeHeight / 4, shapeWidth / 4, shapeHeight / 4);
      }
      pop();
    }
  }
}
