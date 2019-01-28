// 07/01/19 Transofrmations
// Notes
// Manipulating the Co-Oridnate Systems

let radius;
let circleResolution;
let angle;
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  radius = map(mouseX, width / 2, width, 1, windowHeight);
  circleResolution = int(map(mouseY, 0, height, 20, 90));
  myStroke = int(map(mouseY, 0, height, 0, 10));
  angle = 360 / circleResolution;

  background(255, 245,245);
  strokeWeight(myStroke);
  stroke(0,0,125);
  translate(width / 2, height / 2);

  for (i = 0; i < circleResolution; i++) {
    let posX = cos(angle * i) * radius;
    let posY = sin(angle * i) * radius;

    line(0, 0, posX, posY);
    ellipse(posX, posY, 5, 5);
  }
}
