//Open Type Intro
let font;
let textTyped = "e";

function setup() {
  createCanvas(windowWidth, windowHeight);
  opentype.load("data/WorkSans-Black.ttf", function(err, f) {
    if (err) {
      console.log(error);
    } else {
      font = f;
      loop();
    }
  });
}
function draw() {
  if (!font) return;

  background(255);
  translate(windowWidth / 2, windowHeight / 2);

  if (textTyped.length > 0) {
    let fontPath = font.getPath(textTyped, 0, 0, 600);
    let path = new g.Path(fontPath.commands);
    path = g.resampleByLength(path, 0.25);

    fill(0);
    noStroke();
    let diameter = 5;

    for (let i = 0; i < path.commands.length; i++) {
      let point = path.commands[i];
      ellipse(point.x, point.y, diameter);
    }
  }
}
