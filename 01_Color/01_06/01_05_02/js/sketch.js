/* Creative Coding
   Edel Prior
   October 2018 (week 4)
   Notes
*/

// Step 2 :: Making a pallette of colors with content and set rules.


var boxCountX = 100;
var boxCountY = 10;


var hueValue = [];
var satValue = [];
var brightValue = [];

var parts = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 200);
  noStroke();
  //noLoop();

  for (i = 0; i < boxCountX; i++) {
    if (i % 2 == 0) {
      hueValue[i] = random(50, 150);
      satValue[i] = 150;
      brightValue[i] = random(20, 40);
    } else {
      hueValue[i] = 100;
      satValue[i] = random(40, 80);
      brightValue[i] = random(60, 100);
    }
  }
}

function draw() {

//  var mX = constrain(mouseX, 0, width);
//  var mY = constrain(mouseY, 0, height);

  var counter = 0;

  var currentBoxCountX = int((map(20, 0, width, 1, boxCountX)));
  var currentBoxCountY = int((map(20, 0, height, 1, boxCountY)));
  var boxWidth = width / currentBoxCountX;
  var boxHeight = height / currentBoxCountY;

for(var gridY = 0; gridY < boxCountY; gridY++) {
  for(var gridX = 0; gridX < boxCountX; gridX++){
    var positionX = boxWidth * gridX;
    var positionY = boxHeight * gridY;
    var index = counter % currentBoxCountX;

    fill((hueValue[index], satValue[index], brightValue[index]));
    rect(positionX, positionY, boxWidth, boxHeight);
    counter++;
  }
}
}
//   var lineCount = int(random(5, 30));
//   var lineHeight = height / lineCount;
//
//   // console.log(hueValue);
//   // console.log(satValue);
//   for (var i = lineCount; i >= 0; i--) {
//     var partCount = i + 1;
//     parts = [];
//     parts.push(random(2, 20));
//   }
//
//   var totalSum = 0;
//   for (i = 0; i < parts.length; i++) {
//     totalSum = totalSum + parts[i];
//   }
//
// }





// Will have to run on  a server (download live-server package in Atom)
// access by going to command pallette [cmd + shift + P] and typing live-server
//  // access through folder directory
//
//  var sumPartsNow = 0;
// for (var ii = 0; ii < parts.length; ii++) {
//   sumPartsNow += parts[ii];
//
//   var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
//   var y = rowHeight * i;
//   var w = -map(parts[ii], 0, sumPartsTotal, 0, width);
//   var h = rowHeight;
//
//   var index = counter % colorCount;
//   var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
//   fill(col);
//   rect(x, y, w, h);
//
//   counter++;
