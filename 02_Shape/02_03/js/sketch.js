var seedNum = 0;
var shapeCap = "";
var noOfShapes = 30;
var shapeWidth = 0;
var shapeHeight = 0;

function setup() {

  var canvas = createCanvas(windowWidth, windowHeight);
  shapeWidth = width / noOfShapes;
  shapeHeight = height / noOfShapes;

  shapeCap = ROUND;
  rectMode(CENTER);
  ellipseMode(CORNER);
}

function draw() {
  randomSeed(seedNum);
  background(0,0,128);
  for (var y = 0; y <= noOfShapes; y++) {
    for (var x = 0; x <= noOfShapes; x++) {
      let rand = Math.floor(random(0, 2));
      push();
      translate(x * shapeWidth, y * shapeHeight);

      strokeCap(shapeCap);
      stroke(250,215,0);
        if (rand === 0) {
        strokeWeight(map(constrain(mouseX, 0, width), 0, width, 1, 5));
        line(-shapeWidth / 2, shapeHeight / 2, shapeWidth / 2, -shapeHeight / 2);
      } else {
        strokeWeight(map(constrain(mouseY, 0, height), 0, height, 1, 5));
        line(-shapeWidth / 2, -shapeHeight / 2, shapeWidth / 2, shapeHeight / 2);
      }
      pop();
    }
  }

}
