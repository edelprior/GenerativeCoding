// CA Step One
// Hard coding out values

var colors = [];

//___________________________________________________________________________________________________
//___________________________________________________________________________________________________

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  addColors();
  smooth(100);
  background(0);
  noLoop();
}
//___________________________________________________________________________________________________
function addColors() {
  var c;
  c = color(0, 138, 176);
  colors[0] = c;
  // c = color(241, 100, 93);
  // colors[1] = c;
  // c = color(0, 176, 133);
  // colors[2] = c;
  // c = color(233, 108, 31);
  // colors[3] = c;
  // c = color(241, 114, 172);
  // colors[4] = c;
  // c = color(222, 57, 108);
  // colors[5] = c;
  // c = color(231, 206, 0);
  // colors[6] = c;
  // c = color(72, 22, 108);
  // colors[7] = c;
  // c = color(44, 164, 74);
  // colors[8] = c;
}

function getRandomColor() {
  var i = Math.floor(random(colors.length));
  var c = colors[i];
  return c;
}

function draw() {
  makeRibbons();
}

function makeRibbons() {
  //for (var i = 0; i < random(10) + 10; i++) {
  for (var i = 0; i < 1; i++) {
    var strokeWeight = 0.5;

    var amount = 500;
    //var frequency = 0.02; // slightest change to 0.04
    var offset = random(200) + 5;

    var col = getRandomColor();

    strokeWeight;
    stroke(col, 180);
    var startY = height / 2;
    beginShape();
    vertex(0, startY);
    for (var c = 1; c < amount; c++) {
      //var sinoffset = sin(frequency * c);
      var sinoffset = sin(200);

      var sinX = c * (width / amount);
      var sinY = startY + sinoffset * offset;
      bezierVertex(sinX, sinY, sinX, sinY - 1, sinX, sinY);
    }
    endShape();
  }
}
