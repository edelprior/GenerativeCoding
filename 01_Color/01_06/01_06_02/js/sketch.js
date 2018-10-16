/* Creative Coding
   Edel Prior
   October 2018 (week 4)
   Notes
*/

// Step 2 :: Making a pallette of colors with no rules (random X, random Y location)


var colorCount = 20;

var hueValue = [];
var satValue = [];
var brightValue = [];

var parts = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 200);
  noStroke();
  noLoop();

  for (i = 0; i < 5; i++) {
    hueValue[i] = random(50, 150);
    satValue[i] = 150;
    brightValue[i] = random(20, 40);
  }
}


function draw() {

  // ------ area tiling ------
  // count tiles
  var counter = 0;
  // row count and row height
  var tileCount = int(random(5));
  var tileHeight = height / tileCount;

  // seperate each line in parts
  for (var i = tileCount; i >= 0; i--) {
    // how many fragments
    var partCount = i + 1;
    var parts = [];

    for (var b = 0; b < partCount; b++) {
      // sub fragments or not?
        var fragments = int(random(2));
        partCount = partCount + fragments;
        for (var c = 0; c < fragments; c++) {
          parts.push(random(2));
        }
    }

    // add all subparts
    var sumPartsTotal = 0;
    for (var b = 0; b < partCount; b++) {
      sumPartsTotal += parts[b];
    }

    // draw rects
    var sumPartsNow = 0;
    for (var b = 0; b < parts.length; b++) {
      sumPartsNow += parts[b];

      var xPosition = map(sumPartsNow, 0, sumPartsTotal, 0, width);
      var yPosition = tileHeight * i;
      var w = -map(parts[b], 0, sumPartsTotal, 0, width);
      var h = tileHeight;

      var index = counter % colorCount;
      fill(hueValue[index], satValue[index], brightValue[index]);
      rect(xPosition, yPosition, w, h);

      counter++;
    }
  }
}
