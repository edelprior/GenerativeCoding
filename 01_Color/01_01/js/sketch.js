/* Creative Coding
   Edel Prior
   October 2018 (week 3)
   Notes
*/

//
function setup() {

  let canvas = createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);

}

function draw() {
  background(360 - (mouseY / 2), 100, 100);
  translate(width / 2, height / 2);
  fill(mouseY / 2, 100, 100);
  noStroke();
  rect(0, 0, mouseX, mouseX);


}


function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(canvas, gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY, 'png');
}
