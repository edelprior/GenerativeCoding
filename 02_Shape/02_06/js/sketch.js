
// Image loading

let tileCount = 35;
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
  background(255, 245,245, 90);;

  for (let gridX = 0; gridX < tileCount; gridX++) {
    for (let gridY = 0; gridY < tileCount; gridY++) {

      let posX = gridX * tileWidth;
      let posY = gridY * tileWidth;
      let angle = atan2((mouseY - posY) , (mouseX - posX));

      push();
          translate(posX, posY);
          rotate(angle);
          image(img, 0,0,tileWidth-10,tileWidth-10);
      pop();
    }
  }


}
