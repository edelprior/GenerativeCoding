let font;
let textImg;
let tileCount = 55;
let tileWidth;

function preload() {
  font = loadFont("data/WorkSans-Bold.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupText();
  image(textImg,0,0);
  tileWidth = width / tileCount;
}

function setupText() {

  textImg = createGraphics(windowWidth, windowHeight);
  textImg.pixelDensity(1);
  textImg.background(255,165,20);
  textImg.textFont(font);
  textImg.fill(0,0,128);
  textImg.textSize(300);
  textImg.text("Aa Bb Cc", windowWidth /4 ,windowHeight /2);
  textImg.loadPixels();


}

function draw() {

  for (let y = 0; y < height; y = y + tileWidth) {
    for (let x = 0; x < height; x = x + tileWidth) {

      let index = (x + y + textImg.width) * 4;

      if (textImg.pixels[index] < 200){
        rect(gridX, gridY, tileWidth, tileWidth);
      }
      let posX = x * tileWidth;
      let posY = y * tileWidth;

    push();
        translate(posX, posY);
        fill(0,0,128, 10);
        noStroke();


        ellipse(x, y,5);
    pop();

      }
    }
}
