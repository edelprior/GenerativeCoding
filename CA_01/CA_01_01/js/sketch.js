/* Creative Coding
   Edel Prior
   November
   Notes
*/

let img;
let smallPoint, largePoint;

function preload() {
  img = loadImage('data/image1.jpg');
}

function setup() {
  createCanvas(720, 400);
  smallPoint = 4;
  largePoint = 10;
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
}

function draw() {
  let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let  pixels = img.get(x, y);
  fill(pixels, 128);
  ellipse(x, y, pointillize, pointillize);
}
