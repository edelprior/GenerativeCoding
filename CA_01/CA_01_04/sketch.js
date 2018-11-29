// CA_01_04
// Edel Prior
// N00153748
// Brief = Create a book cover with p5 for a book about Generative Design and Color Theory
// Original idea = working with Sine Waves and Color to create an interesting and relevant cover
// simple version of sine wave
// Simple sine Wave coded with a line rather than a bezier Curve // allows for an interesting graphic made of strokes

var xstep = 2;
var lastx = -999;
var lasty = -999;
var angle = 0;
var y = 50;

function setup() {
  createCanvas(1240, 1748);
  sineGraphic = createGraphics(1240, 1748);
  background(255);
  sineGraphic.noFill();
}

function draw() {
  background(255);
  DrawSineWave();
}
function DrawSineWave() {
  sineGraphic.xstep = 1;
  sineGraphic.lastx = -999;
  sineGraphic.lasty = -999;
  sineGraphic.angle = 0;
  sineGraphic.y = 50;
  for (var x = 20; x <= 480; x += xstep) {
    var rad = radians(sineGraphic.angle);
    sineGraphic.y = 50 + sin(rad) * 40;
    if (sineGraphic.lastx > -999) {
      stroke(255, 0, 0);
      noFill();
      line(x, sineGraphic.y, sineGraphic.lastx, sineGraphic.lasty);
    }

    sineGraphic.lastx = x;
    sineGraphic.lasty = y;
    sineGraphic.angle++;
  }
}
