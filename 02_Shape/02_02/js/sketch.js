var radius;
let circleResolution;
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {

let radius = map(mouseX, width / 2, width, 1, 1500);

  //let radius = map(mouseX, width / 2, width, 1, windowHeight);

let  circleResolution = int(map(mouseY, 0, height, 5, 50));
let  myStroke = int(map(mouseY, 0, height, 0, 10));
let  angle = 360 / circleResolution;

  background(255, 245,245);
  strokeWeight(myStroke);

  translate(windowWidth / 2, windowHeight / 2);

  for (i = 0; i < circleResolution; i++) {
    push();
    let posX = cos(angle * i) * radius;
    let posY = sin(angle * i) * radius;
    line(0, 0, posX, posY);
    ellipse(posX, posY, 2.5, 2.5);
    pop();
}
}
