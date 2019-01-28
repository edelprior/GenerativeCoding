
// Image loading

let tileCount = 5;
let tileWidth;
let img;
let mySlider;

function preload(){
  img = loadImage('data/star.svg');
}
function setup() {

    mySlider = createSlider(5,30,10);
    mySlider.position(10,10);
    mySlider.style('width', '80px');
    mySlider.style('position', 'relative');

  createCanvas(windowWidth, windowHeight);

  imageMode = (CENTER);

}

function draw() {
  randomSeed(100);
  background(255, 245,245);

  tileCount = mySlider.value();
  tileWidth = width/tileCount;

  for (let gridX = 0; gridX < tileCount; gridX++) {
    for (let gridY = 0; gridY < tileCount; gridY++) {

      let posX = gridX * tileWidth;
      let posY = gridY * tileWidth;
      push();
        translate(posX, posY);
        fill(250,215,0);
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
        stroke(0,0,128);
        fill(0,0,128);
        strokeWeight(circleStroke);
    //  ellipse(shiftX,shiftY,circleRadius, circleRadius);
        arc(shiftX,shiftY,circleRadius,circleRadius, TWO_PI, PI);



        pop();
      }
    }
}
