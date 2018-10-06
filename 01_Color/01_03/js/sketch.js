
function setup(){

let canvas = createCanvas(500,500);
colorMode(HSB, 360, 100, 100);
rectMode(CENTER);
noStroke();

}

function draw() {

 let numberOfSteps = 20;
 let angleSize = 360 / numberOfSteps;
 let radius = 200;


 beginShape(TRIANGLE_FAN);

  vertex(width / 2, height / 2);

  for (let angle = 0; angle <= 370;  angle += angleSize) {
      let VX = radius * cos(radians(angle)) + width / 2 ;
      let VY = radius * sin(radians(angle)) + height / 2 ;
      vertex(VX, VY);
      fill(angle, width, height);
    }
  endShape();

}



function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(canvas, gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY, 'png');
}
