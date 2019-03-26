/* Creative Coding
   Edel Prior
   October 2018 (week 3)
   Notes
*/

//
function setup() {

  let canvas = createCanvas(windowWidth,windowHeight);
  colorMode(RGB, 300, 200, 0);
  rectMode(CENTER);

}

function draw() {
  background(200 - (mouseY / 4), 100, 220);
  translate(width / 2, height / 2);
  fill(mouseY / 4, 1, 1);
  noStroke();
//  ellipse(0, 0, mouseX, mouseX);
  polygon (0, 0, mouseX, 5);
  //polygon (0, 0,rectWidth,5);
}


function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(canvas, gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY, 'png');
 }

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
