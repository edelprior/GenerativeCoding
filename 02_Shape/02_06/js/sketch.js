
// Image loading

let tileCount = 15;
let tileWidth;
let img;

function preload(){
  img = loadImage('data/star.svg');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  tileWidth = width/tileCount;
  imageMode = (CENTER);
}

function draw() {
  background(0,0,128, 45);;

  for (let gridX = 0; gridX < tileCount; gridX++) {
    for (let gridY = 0; gridY < tileCount; gridY++) {

      let posX = gridX * tileWidth;
      let posY = gridY * tileWidth;
      let angle = atan2((mouseY - posY) , (mouseX - posX));

      push();
          translate(posX, posY);
          rotate(angle);
          image(img, 0,0,tileWidth - 20,tileWidth  -20);
      pop();
    }
  }


}
