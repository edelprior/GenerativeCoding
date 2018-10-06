/* Creative Coding
   Edel Prior
   October 2018 (week 3)
   Notes
*/

//

let colorsLeft = [];
let colorsRight = [];
let colors = [];

let tileSizeX = 2;
let tileSizeY = 10;


// let interColor;
let interpolateShortest = true;
// let firstColor;
// let secondColor;

function setup() {

  createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  shakeColors();
}


function draw() {

  tileSizeX = int(map(mouseX, 0, width, 2, 100));
  tileSizeY = int(map(mouseY, 0, height, 2, 10));

  let tileWidth = width / tileSizeX;
  let tileHeight = height / tileSizeY;
  let interColor;

  for (let gridY = 0; gridY < tileSizeY; gridY++) {
    for (let gridX = 0; gridX < tileSizeX; gridX++) {

      let firstColor = colorsLeft[gridY];
      let secondColor = colorsRight[gridY];


      let amount = map(gridX, 0, tileSizeX - 1, 0, 1);

      if (interpolateShortest) {
        colorMode(RGB);
        interColor = lerpColor(firstColor, secondColor, amount);
        colorMode(HSB);
        /// Receiving error after multiple runthroughs of the script ;
        // "Cannot read property 'levels' of undefined at sketch.js.52"
      } else {
        interColor = lerpColor(firstColor, secondColor, amount);
      }


      let Xposition = tileWidth * gridX;
      let Yposition = tileHeight * gridY;

      fill(interColor);
      rect(Xposition, Yposition, tileWidth, tileHeight);

      colors.push(interColor);
    }
  }
}


function shakeColors() {
  for (let i = 0; i < tileSizeY; i++) {
    colorsLeft[i] = color(random(0, 10), random(0, 200), 100);
    colorsRight[i] = color(random(10, 300), 100, random(0, 100));
  }
}
//
// function mouseReleased() {
//   shakeColors();
// }




function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(canvas, gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY, 'png');
}
