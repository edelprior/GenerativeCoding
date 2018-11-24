// CA Step One
// Hard coding out values
// trying to get generated sin WAVE

function setup() {
  createCanvas(1240, 1748);
  noFill();
  background(205);
  //noLoop()
  //  frameRate(0.5);
}

function draw() {
  //  makeRibbons();
  //  makeSineWave();
  makeRandoms();
}

function makeRibbons() {
  stroke(255, 0, 0);
  var startY = height / 2;
  startY += 1;
  var frequency = 0.03; // slightest change to 0.04
  var offset = 205;

  beginShape();
  vertex(0, startY);
  for (var x = 11; x < windowWidth; x++) {
    var sinoffset = sin(frequency * x);
    var sinX = x * (width / 600);
    var sinY = startY + sinoffset * offset;
    sinX += 1;
    bezierVertex(sinX, sinY, sinX, sinY - 1, sinX, sinY);
  }
  endShape();
}

function makeSineWave() {
  stroke(255, 0, 0, 90);
  strokeWeight(10);
  var startY = 250;

  for (var i = 0; i < 1; i++) {
    var amount = 500;
    var frequency = 0.04;
    var offset = 23;
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
  noStroke();
  noLoop();
}

function makeRandoms() {
  for (var i = 0; i < 20; i++) {
    var strokeW = random(7) + 3;

    var amount = 400;
    var frequency = random(0.75) / 15;
    var offset = random(200) + 5;

    strokeWeight(strokeW);
    stroke(255, 0, 0, 50);
    var startY = random(5, 1748);
    beginShape();
    vertex(0, startY);
    for (var c = 1; c < amount; c++) {
      var sinoffset = sin(frequency * c);
      var sinX = c * (width / amount);
      var sinY = startY + sinoffset * offset;
      bezierVertex(sinX, sinY, sinX, sinY - 1, sinX, sinY);
    }
    endShape();
    noLoop();
  }
}
