/* Creative Coding
   Edel Prior
   October 2018 (week 4)
   Notes
*/

// Step 1 :: Making a pallette of colors with content and set rules.


var colorCount = 60;
var hueValue = [];
var satValue = [];
var brightValue = [];


function setup() {
  colorMode(HSB, 100);
  createCanvas(500, 500);
  noStroke();
  // Helpful function that stops draw() running in a loop
  noLoop();
}


function draw() {

  for (i = 0; i < colorCount; i++) {
    if (i % 2 == 0) {
      hueValue[i] = random(50, 150);
      satValue[i] = 150;
      brightValue[i] = random(20, 40);
    } else {
      hueValue[i] = 100;
      satValue[i] = random(40,80);
      brightValue[i] = random(60, 100);
    }


}
  // console.log(hueValue);
  // console.log(satValue);

  for( i = 0; i < 5; i++) {
    var xWidth = random(20, 300);
    rect(20,20, xWidth, 75);
    fill(hueValue[i], satValue[i], brightValue[i]);
  }



}



// Will have to run on  a server (download live-server package in Atom)
// access by going to command pallette [cmd + shift + P] and typing live-server
// access through folder directory
