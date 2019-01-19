// 07/01/19 Transofrmations
// Notes
// Manipulating the Co-Oridnate Systems

let radius;
let circleResolution;
let angle;
function setup() {
  let canvas = createCanvas(500,500);
  angleMode(DEGREES);
    noFill();
     background(245);
}

function draw() {
if (mouseIsPressed && mouseButton == LEFT) {
  radius = map(mouseX, width/2, width, 1, 150);
  circleResolution = int(map(mouseY, 0, height, 1, 18));
  myStroke = int(map(mouseY, 0, height, 0, 10));
  angle = 360 / circleResolution;

  translate(width/2, height/2);


// while (mouseX > 300) {
//   rotate(45);
// }
beginShape();
  for( i = 0; i < circleResolution; i++) {
      let posX = cos(angle * i) * (radius);
      let posY = sin(angle * i) * (radius);
        vertex(posX, posY);

        if (mouseY > height / 2) {
        stroke(0,0, 150, 35);
      }
       else {
         stroke(0,150,0,15);
       }
     }

endShape(CLOSE);

  }
}


function keyReleased() {
  if (keyCode == DELETE || keyCode == BACKSPACE) background(245);
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
