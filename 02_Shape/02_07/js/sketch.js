
// Image loading

let tileCount = 10;
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
  randomSeed(100);
  background(255);

// * * *
// First Grid

  for (let gridX = 0; gridX < tileCount; gridX++) {
    for (let gridY = 0; gridY < tileCount; gridY++) {

      let posX = gridX * tileWidth;
      let posY = gridY * tileWidth;
      push();
        translate(posX, posY);
        fill(255,0,0, 50);
        noStroke();
        ellipse(0,0,tileWidth/2);
      pop();
    }
  }


// * * *
// Second GRID

  for (let gridX = 0; gridX < tileCount; gridX++) {
    for (let gridY = 0; gridY < tileCount; gridY++) {

      let posX = gridX * tileWidth;
      let posY = gridY * tileWidth;
      let angle = atan2((mouseY - posY) , (mouseX - posX));


        let circleRadius = map(constrain(mouseX, 0, width), 0, width, 10,30);
        let circleStroke = map(constrain(mouseY,0,height),0, height, 1,10);

        let shiftX = random(-mouseX, mouseX) / 10;
        let shiftY = random(-mouseY, mouseY) / 10;





        push();
        translate(posX, posY);
        rotate(angle);
        stroke(230);
        fill(230,230,230);
        strokeWeight(circleStroke);
        ellipse(shiftX,shiftY,circleRadius);
        pop();
      }
    }
}
