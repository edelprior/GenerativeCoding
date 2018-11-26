// simple version of sine wave
function setup() {
  createCanvas(1240, 1748);
  noFill();
  background(255);
  noLoop();
}



function draw() {
 background(255);
  makeRibbons();
  frameRate(2);

}
//-----
function makeRibbons() {
    stroke(255,0,0);
    strokeWeight(5);
    var startY = height /floor(random(1, 30));

  for (var i = 0; i < 1; i++) {
    var amount = 500;
    var frequency = random(1.0) / 15;
    var offset = random(200) + 5;

  }

  beginShape();
       vertex(0, startY);
          for (var c = 1; c < amount; c++) {
               var sinoffset = sin(frequency * c);
               var sinX = c * (width / amount);
               var sinY = startY + sinoffset * offset;

               bezierVertex(sinX, sinY, sinX, sinY - 1, sinX, sinY);
    }
  endShape();
  }
