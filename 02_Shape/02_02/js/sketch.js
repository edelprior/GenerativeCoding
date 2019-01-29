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
<<<<<<< HEAD
  radius = map(mouseX, width / 2, width, 1, 1500);
=======
  radius = map(mouseX, width / 2, width, 1, windowHeight);
>>>>>>> 64111124579154268bb66a4098a3ec15cd13d505
  circleResolution = int(map(mouseY, 0, height, 20, 90));
  myStroke = int(map(mouseY, 0, height, 0, 10));
  angle = 360 / circleResolution;

  background(255, 245,245);
  strokeWeight(myStroke);
<<<<<<< HEAD
  translate(width / 2, height / 2);

  for (i = 0; i < circleResolution; i++) {
    let posX = cos(angle * i) * radius;
    let posY = sin(angle * i) * radius;
    //beginShape();
    line(0, 0, posX, posY);
    ellipse(posX, posY, 2.5, 2.5);
    //endShape();
=======
  stroke(0,0,125);
  translate(width / 2, height / 2);

  for (i = 0; i < circleResolution; i++) {
    let posX = cos(angle * i) * radius;
    let posY = sin(angle * i) * radius;

    line(0, 0, posX, posY);
    ellipse(posX, posY, 5, 5);
>>>>>>> 64111124579154268bb66a4098a3ec15cd13d505
  }
}
