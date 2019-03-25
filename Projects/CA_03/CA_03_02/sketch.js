// Variables for the inputs
let shapeSlider;
let densitySlider;
let input;
let txtSizeDrop;
let shapeDrop;
let startArray = [];
let endArray = [];
let img;
let load_image = 'image_01.jpg';
let graphic;
let pixelD = 18;
let shape = 'Ellipse';
let shapeSize = 10;
let txtSize = 400;
let txtTyped = 'p5.js';
let font;
let lerpDis = 0;
let distance = 500;

function preload() {
  img = loadImage(load_image);
  font = loadFont("data/WorkSans-SemiBold.ttf");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  graphic = createGraphics(width, height);
  txtGraphic();
  img.loadPixels();

  shapeSlider = createSlider(1, 20, shapeSize);
  shapeSlider.parent('shapeSlider');
  shapeSlider.class('input slider');
  shapeSlider.changed(update);


  densitySlider = createSlider(2, 40, pixelD);
  densitySlider.parent('densitySlider');
  densitySlider.class('input slider');
  densitySlider.changed(update);

  // Text input for the display
  input = createInput(txtTyped, 'text');
  input.parent('input');
  input.class('input');
  input.input(update);

  // Dropdown list for text size
  txtSizeDrop = createSelect();
  txtSizeDrop.parent('txtSizeDrop');
  txtSizeDrop.option(400);
  txtSizeDrop.option(500);
  txtSizeDrop.option(600);
  txtSizeDrop.option(700);
  txtSizeDrop.changed(update);

  // Dropdown list for shape
  shapeDrop = createSelect();
  shapeDrop.parent('shapeDrop');
  shapeDrop.option('Ellipse');
  shapeDrop.option('Rectangle');
  shapeDrop.changed(update);

}


function draw() {
  background(255, 245,245, 50);
  lerpPoints();
  drawPoints();

  if (lerpDis < 1){
    lerpDis = lerpDis + noise(.001);
  } else {
    lerpDis = 1;
  }
}

function lerpPoints() {
  startArray = [];
  endArray = [];

  for (let y = 0; y < graphic.height; y += pixelD) {
    for (let x = 0; x < graphic.width; x += pixelD) {
      let graphicIndex = (x + y * graphic.width) * 4;
      let imgIndex = (x + y * img.width) * 4;
      if (graphic.pixels[graphicIndex] <= 128) {
        startArray.push({
          x: x + random(-distance, distance),
          y: y + random(-distance, distance)
        });
          endArray.push({
          x: x,
          y: y,
          fill: color(img.pixels[imgIndex], img.pixels[imgIndex + 1], img.pixels[imgIndex + 2])
        });
      }
    }
  }
}



function drawPoints() {
  for (let i = 0; i < endArray.length; i++) {
    let x = lerp(startArray[i].x, endArray[i].x, lerpDis);
    let y = lerp(startArray[i].y, endArray[i].y, lerpDis);
    stroke(endArray[i].fill);
    fill(endArray[i].fill);

    // Checking what shape is to be drawn
    if (shape === 'Ellipse') {
      fill(endArray[i].fill);
      ellipse(x, y, shapeSize, shapeSize);
    } else if (shape === 'Rectangle') {
      rect(x, y, shapeSize, shapeSize);
      fill(endArray[i].fill);
    }
  }
}

function txtGraphic() {
  graphic.pixelDensity(1);
  graphic.background(255);
  graphic.fill(0);
  graphic.textSize(txtSize);
  graphic.textAlign(CENTER);
  graphic.textFont(font);
  graphic.text(txtTyped, graphic.width / 2, (graphic.height / 2) + txtSize / 3);
  graphic.loadPixels();
}

function update() {
  shapeSize = shapeSlider.value();
  pixelD = densitySlider.value();
  shape = shapeDrop.value();
  txtTyped = input.value();
  let size = txtSizeDrop.value();
  txtSize = int(size);
  txtGraphic();
  lerpDis = 10;
}
