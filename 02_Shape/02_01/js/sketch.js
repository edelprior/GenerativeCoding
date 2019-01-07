// 07/01/19 Transofrmations
// Notes
// Manipulating the Co-Oridnate Systems

let radius = 150;
let angle = 45;

function setup() {
  let canvas = createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background(245);
  let posX = cos(angle) * radius;
  let posY = sin(angle) * radius;

  translate(width/2, height/2);
  strokeWeight(2);
  line(0, 0, posX, posY);
  angle ++;
}
