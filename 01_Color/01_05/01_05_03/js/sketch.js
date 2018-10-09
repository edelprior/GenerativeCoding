/* Creative Coding
   Edel Prior
   October 2018 (week 3)
   Notes
*/

let img;
let colors = [];

function preload() {
  img = loadImage('data/image.jpg');
}

function setup(){

createCanvas(500,500);
noCursor();

noLoop();
}


function draw() {
// define the amount of tiles
let tileCount = 20;
// define the width of each of them (the X value)
let rectSize = width / tileCount;
img.loadPixels();
//empty color[] everytime draw() exec
colors = [];

for(var gridY = 0; gridY < tileCount; gridY++){
  for (var gridX = 0; gridX < tileCount; gridX++){
    //pixel value along the X and Y axis
    var pixelX = int(gridX *rectSize);
    var pixelY = int(gridY *rectSize);
// Allowing the X and Y value to be used to target specific indexes in the []
// 4 vars in each object hence *4
    var i = (pixelY * img.width + pixelX) * 4;

    var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
    colors.push(c);


    

}
}
    //pushing the color array
    var i = 0;
    for (var gridY = 0; gridY < tileCount; gridY++) {
      for (var gridX = 0; gridX < tileCount; gridX++) {
console.log(colors[i]);
        fill(colors[i]);
          //fill(200,200,200);
        rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
        i++;
      }
    }
}
