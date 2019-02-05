// CA_02
// Step One - Fixing Bugs
// Edel Prior
// N00153748

let minuteStrokeLength = 10;
let minuteStrokeWeight = 4;
let minuteStrokeColor;
let minuteStrokeCap;

let minuteHandsTaper = 10;
let minuteHandLength = 165;
let minuteHandOffset = 80;
let minuteHandStartWidth = 20;

// * * * *

let hourStrokeLength = 40;
let hourStrokeWeight = 15;
let hourStrokeColor;
let hourStrokeCap;

let hourHandsTaper = 8;
let hourHandLength = 135;
let hourHandOffset = 80;
let hourHandStartWidth = 20;

// * * * *

let clockRadius = 220;
let secondHandsTaper = 5;
let secondHandLength = 155;
let secondHandOffset = 80;
let secondHandStartWidth = 10;

// - - - - - - - - - - - - -

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();
  angleMode(DEGREES);

  minuteStrokeColor = color(30, 30, 30);
  minuteStrokeCap = SQUARE;

  hourStrokeColor = color(30, 30, 30);
  hourStrokeCap = SQUARE;
}

function draw() {
  background(255, 245, 245);
  strokeCap(SQUARE);

  //hourHand
  push();
  noStroke();
  fill(hourStrokeColor);
  translate(width / 2, height / 2);
  let hourAngle = map(hour(), 0, 12, 0, 360);
  rotate(hourAngle + 270);

  beginShape();
  vertex(-hourHandOffset, -hourHandStartWidth);
  vertex(hourHandLength, -hourHandStartWidth + hourHandsTaper);
  vertex(hourHandLength, hourHandStartWidth - hourHandsTaper);
  vertex(-hourHandOffset, hourHandStartWidth);
  endShape(CLOSE);
  pop();

  //minuteHand
  push();
  noStroke();
  fill(minuteStrokeColor);
  translate(width / 2, height / 2);
  let minuteAngle = map(minute(), 0, 60, 0, 360);
  rotate(minuteAngle + 270);
  beginShape();
  vertex(-minuteHandOffset, -minuteHandStartWidth);
  vertex(minuteHandLength, -minuteHandStartWidth + minuteHandsTaper);
  vertex(minuteHandLength, minuteHandStartWidth - minuteHandsTaper);
  vertex(-minuteHandOffset, minuteHandStartWidth);
  endShape(CLOSE);
  pop();

  //secondHand
  push();
  fill(255, 0, 0);
  noStroke();
  translate(width / 2, height / 2);
  let secondAngle = map(second(), 0, 60, 0, 360);
  rotate(secondAngle + 270);

  beginShape();
  vertex(-secondHandOffset, -secondHandStartWidth);
  vertex(secondHandLength, -secondHandStartWidth + secondHandsTaper);
  vertex(secondHandLength, secondHandStartWidth - secondHandsTaper);
  vertex(-secondHandOffset, secondHandStartWidth);
  endShape(CLOSE);
  ellipse(0, 0, 25);
  ellipse(secondHandLength - 25 / 2 + 1, 0, 25, 25);
  pop();

  //drawing the Ticks
  for (t = 0; t < 60; t++) {
    push();
    translate(width / 2, height / 2);
    rotate(map(t, 0, 60, 0, 360));
    if (t == 0 || t % 5 == 0) {
      fill(hourStrokeColor);
      strokeWeight(hourStrokeWeight);
      line(0, clockRadius - hourStrokeLength, 0, clockRadius);
    } else {
      fill(minuteStrokeColor);
      strokeWeight(minuteStrokeWeight);
      line(0, clockRadius - minuteStrokeLength, 0, clockRadius);
    }
    pop();
  }
}
