'use strict';

var colorCount = 20;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
var actRandomSeed = 0;
var alphaValue = 27; // step two



function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  background(144);
  noLoop();
  //  randomSeed(actRandomSeed);

  // ------ colors ------
  // create palette
  for (var i = 0; i < colorCount; i++) {
    if (i % 2 == 0) {
      hueValues[i] = random(130, 220);
      saturationValues[i] = 100;
      brightnessValues[i] = random(15, 100);
    } else {
      hueValues[i] = 195;
      saturationValues[i] = random(20, 100);
      brightnessValues[i] = 100;
    }
  }

  // ------ area tiling ------
  // count tiles
  var counter = 0;
  // row count and row height
  var rowCount = int(random(5, 30));
  var rowHeight = height / rowCount;

  // seperate each line in parts
  for (var i = rowCount; i >= 0; i--) {
    // how many fragments
    var partCount = i + 1;
    var parts = [];

    for (var ii = 0; ii < partCount; ii++) {
      // sub fragments or not?
      if (random() < 0.075) {
        // take care of big values
        var fragments = int(random(2, 20));
        partCount = partCount + fragments;
        for (var iii = 0; iii < fragments; iii++) {
          parts.push(random(2));
        }
      } else {
        parts.push(random(2, 20));
      }
    }

    // add all subparts
    var sumPartsTotal = 0;
    for (var ii = 0; ii < partCount; ii++) {
      sumPartsTotal += parts[ii];
    }

    // draw rects
    var sumPartsNow = 0;
    for (var ii = 0; ii < parts.length; ii++) {
      sumPartsNow += parts[ii];
      // PART THREE
      if (random() < 0.045) {
        // var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
        // var y = rowHeight * i;
        // var w = -map(parts[ii], 0, sumPartsTotal, 0, width);
        // var h = rowHeight * 1.5;


        // STEP FOUR
        var w = map(parts[ii], 0, sumPartsTotal, 0, width);
        var h = rowHeight * 1.5
        var px1 = map(sumPartsNow, 0, sumPartsTotal, 0, width);
        var px2 = px1 + w;
        var py1 = rowHeight * i;
        var py2 = py1 + h;
        var index = counter % colorCount;

        //   var col1 = color(0);
        //   var col2 = color(hueValues[index], saturationValues[index], brightnessValues[index], alphaValue);
        //   //STEP TWO
        //   gradient(x, y, w, h, col1, col2);

        // STEP FOUR
        var col1 = color(hueValues[index], saturationValues[index], brightnessValues[index], alphaValue);
        // create complementary color
        var col2 = color(hueValues[index] - 180, saturationValues[index], brightnessValues[index], alphaValue);
        centerGradient(px1, py1, 0, px2, py2, max(w, h), col1, col2);
      }

      //      STEP ONE // var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
      // fill(col);
      // rect(x, y, w, h);

      counter++;
    }
  }


}



// // STEP TWO
// function gradient(x, y, w, h, c1, c2) {
//   var ctx = drawingContext; // global canvas context p5.js var
//   var grd = ctx.createLinearGradient(x, y, x, y + h);
//   grd.addColorStop(0, c1.toString());
//   grd.addColorStop(1, c2.toString());
//   ctx.fillStyle = grd;
//   ctx.fillRect(x, y, w, h);

function centerGradient(x1, y1, r1, x2, y2, r2, c1, c2) {
  var ctx = drawingContext; // global canvas context p5.js var
  var cx = x1 + (x2 - x1) / 2;
  var cy = y1 + (y2 - y1) / 2;
  var grd = ctx.createRadialGradient(cx, cy, r1, cx, cy, r2);
  grd.addColorStop(0, c1.toString());
  grd.addColorStop(1, c2.toString());
  ctx.fillStyle = grd;
  ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
}
