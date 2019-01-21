// 19/01/19 Transformations
// Notes
// Drawing A Swiss Clock
// CA_02

let radius, diameter, hourTick, minuteTick, tickWidth;

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
  radius = width / 4;
  diameter = width / 2;
  hourTick = 70;
  minuteTick = 30;
  tickWidth = 2;
}

function draw() {
  strokeCap(SQUARE);

  //clock bg
  push();
  translate(width / 2, height / 2);
  ellipse(0, 0, diameter);
  pop();

  // ** HANDS
  //
  // map function for hands
  let hourHand = map(hour(), 0, 24, 0, 360);

  push();
  translate(width / 2, height / 2);
  rotate(hourHand + 270);
  //fill(0);
  strokeWeight(35);
  line(-85, 0, radius - 160, 0);
  pop();

  let minuteHand = map(minute(), 0, 60, 0, 360);
  //minutes
  push();
  translate(width / 2, height / 2);
  rotate(minuteHand + 270);
  fill(0);
  strokeWeight(30);
  line(-80, 0, radius - tickWidth - 65, 0);
  pop();

  let secondHand = map(second(), 0, 60, 0, 360);
  //seconds line
  push();
  translate(width / 2, height / 2);
  rotate(secondHand + 270);
  strokeWeight(15);
  stroke(225, 0, 0);
  line(-80, 0, radius - 110, 0);
  fill(225, 0, 0);
  ellipse(0, 0, 35);
  ellipse(radius - 110, 0, 60);
  pop();

  //clock ticks
  for (let t = 0; t < 60; t++) {
    push();
    translate(width / 2, height / 2);
    rotate(map(t, 0, 60, 0, 360));
    if (t == 0 || t % 5 === 0) {
      //check if its an hour
      strokeWeight(35);
      line(0, radius - hourTick, 0, radius - tickWidth);
    } else {
      strokeWeight(15);
      line(0, radius - minuteTick, 0, radius - tickWidth);
    }
    pop();
  }
}
