// 07/01/19 Transofrmations
// Notes
// Manipulating the Co-Oridnate Systems

var radius = 150;
let angle = 45;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(255, 245, 245);
}

function draw() {
  let posX = cos(angle) * radius;
  let posY = sin(angle) * radius;

  translate(width / 2, height / 2);
  stroke(0, 0, 125, 85);
  strokeWeight(10);
  line(0, 0, posX, posY);
  angle++;
}
