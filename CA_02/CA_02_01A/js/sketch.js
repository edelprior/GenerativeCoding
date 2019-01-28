let minuteStrokeLength = 10;
let minuteStrokeWeight = 4;
let minuteStrokeColor;
let minuteStrokeCap;

let minuteHandsTaper = 6;
let minuteHandLength = 155;
let minuteHandOffset = 80;
let minuteHandStartWidth = 20;

// * * * *

let hourStrokeLength = 30;
let hourStrokeWeight = 10;
let hourStrokeColor;
let hourStrokeCap;

let hourHandsTaper = 6;
let hourHandLength = 195;
let hourHandOffset = 80;
let hourHandStartWidth = 20;

// * * * *

let clockRadius = 200;
let secondHandsTaper = 2;
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
  //background and circles
  background(255);
  ellipse(width / 2, height / 2, clockRadius * 2);
  push();
  translate(width / 2, height / 2);
  ellipse(0, 0, 15);
  pop();
  //hourHand
  push();
  translate(width / 2, height / 2);
  let hourAngle = map(hour(), 0, 24, 0, 360);
  rotate(hourAngle + 270);
  //  fill(hourStrokeColor);
  beginShape();
  vertex(0, 0 - hourHandOffset);
  vertex(hourHandLength - hourHandsTaper, 0 - hourHandOffset);
  vertex(hourHandLength - hourHandsTaper, hourHandOffset + hourHandLength);
  vertex(0, hourHandOffset + hourHandLength);
  endShape(CLOSE);
  pop();
  //minuteHand
  push();
  translate(width / 2, height / 2);
  let minuteAngle = map(minute(), 0, 60, 0, 360);
  rotate(minuteAngle + 270);
  //  fill(hourStrokeColor);
  beginShape();
  vertex(0, 0 - minuteHandOffset);
  vertex(minuteHandLength - minuteHandsTaper, 0 - minuteHandOffset);
  vertex(
    minuteHandLength - minuteHandsTaper,
    minuteHandOffset + minuteHandLength
  );
  vertex(0, minuteHandOffset + minuteHandLength);
  endShape(CLOSE);
  pop();
  //secondHand
  push();
  translate(width / 2, height / 2);
  let secondAngle = map(second(), 0, 60, 0, 360);
  rotate(secondAngle + 270);
  //  fill(hourStrokeColor);
  beginShape();
  vertex(0, 0 - secondHandOffset);
  vertex(secondHandLength - secondHandsTaper, 0 - secondHandOffset);
  vertex(
    secondHandLength - secondHandsTaper,
    secondHandOffset + secondHandLength
  );
  vertex(0, secondHandOffset + secondHandLength);
  endShape(CLOSE);
  fill(255, 0, 0);
  ellipse(secondAngle, 0, 25);
  pop();

  //drawing the Ticks
  for (t = 0; t > 60; t++) {
    if (t == 0 || t % 5 == 0) {
      stroke(hourStrokeColor);
      strokeWeight(hourStrokeWeight);
      strokeCap(hourStrokeCap);
      line(0, 0, hourStrokeLength);
    } else {
      stroke(minuteStrokeColor);
      strokeWeight(minuteStrokeWeight);
      strokeCap(minuteStrokeCap);
      line(0, 0, minuteStrokeLength);
    }
  }
}
