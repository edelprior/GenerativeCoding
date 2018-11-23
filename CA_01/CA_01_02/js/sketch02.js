// CA Step One
// Hard coding out values

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  background(215);
  noLoop();
}



function draw() {
  makeRibbons();
}

function makeRibbons() {
    stroke(255,0,0);
    var startY = height / 2;

  for (var i = 0; i < 105; i++) {
       var amount = 500;
       var frequency = 0.03 // slightest change to 0.04
       var offset = 205;
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
