// 07/01/19 Transofrmations
// Notes
// Manipulating the Co-Oridnate Systems

let radius;
let circleResolution;
let angle;
function setup() {
  let canvas = createCanvas(500,500);
  angleMode(DEGREES);

}

function draw() {

  radius = map(mouseX, width/2, width, 1, 150);
  circleResolution = int(map(mouseY, 0, height, 2, 90));
  myStroke = int(map(mouseY, 0, height, 0, 10));
  angle = 360 / circleResolution;

  background(245);
  strokeWeight(myStroke);
  translate(width/2, height/2);


  for( i = 0; i < circleResolution; i++) {
      let posX = cos(angle * i) * (radius);
      let posY = sin(angle * i) * (radius);
      //beginShape();
        line(0, 0, posX, posY);
        ellipse( posX,posY, 2.5, 2.5);
      //endShape();
    }
}
