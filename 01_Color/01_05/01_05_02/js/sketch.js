/* Creative Coding
   Edel Prior
   October 2018 (week 3)
   Notes
*/

let img;
let colors = [];
let sortMode = null;

function preload() {
  img = loadImage('data/image.jpg');
}

function setup(){

createCanvas(500,500);
noCursor();
noStroke();
noLoop();
}


function draw() {
// define the amount of tiles
let tileCount = 2;
// define the width of each of them (the X value)
let rectSize = width / tileCount;
img.loadPixels();
//empty color[] everytime draw() exec
colors = [];

for(let gridY = 0; gridY < tileCount; gridY++){
  for (let gridX = 0; gridX < tileCount; gridX++){
    //pixel value along the X and Y axis
    let pixelX = int(gridX *rectSize);
    let pixelY = int(gridY *rectSize);
// Allowing the X and Y value to be used to target specific indexes in the []
// 4 vars in each object hence *4
    var i = (pixelY * img.width + pixelX * 4);

    // making a color object
    var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
    colors.push(c);

    console.log(colors);
}
}
}
