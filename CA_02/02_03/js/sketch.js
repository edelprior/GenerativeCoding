// 19/01/19 Transofrmations
// Notes
// Drawing A Swiss Clock
// CA_02

let x, y;
let secondsR, minutesR, hoursR;
let diameter, radius;

function setup() {
  createCanvas(windowWidth, windowHeight);

  radius = (width, height) / 2;
  // secondsR = radius * 0.71;
  // minutesR = radius * 0.6;
  // hoursR = radius * 0.5;
  // diameter = radius * 1.7;

  x = width / 2;
  y = height / 2;
}
function draw() {
  background(255);
  strokeCap(SQUARE);
  const rad = (width, height / 2);
  const hourTick = 40;
  const secondTick = 20;
  const tickGap = 10;

  // clock background
  fill(0);
  ellipse(x, y, diameter + 25);

  fill(255);
  ellipse(x, y, diameter);

  // angles (sin) and (cos) start at 3 O'Clock
  // use HALF-Pi to start at top

  let seconds = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let minutes =
    map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let hours =
    map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  // Draw the hands of the clock

  // seconds hand

  push();

  strokeWeight(4);
  stroke(255, 0, 0);
  line(x, y, x + cos(seconds) * secondsR, y + sin(seconds) * secondsR);
  fill(255, 0, 0);
  ellipse(x + cos(seconds) * secondsR, y + sin(seconds) * secondsR, 45, 45);

  pop();

  // * * *

  // minutes hand
  push();
  strokeWeight(20);
  strokeCap(SQUARE);
  line(x, y, x + cos(minutes) * minutesR, y + sin(minutes) * minutesR);

  pop();

  // * * *

  // hours hand

  push();

  strokeWeight(30);
  strokeCap(SQUARE);

  line(x, y, x + cos(hours) * hoursR, y + sin(hours) * hoursR);

  pop();

  // * * *

  // Draw the minute ticks

  for (let t = 0; t < 60; t++) {
    push();
    translate(width / 2, height / 2);
    rotate(map(t, 0, 60, 0, 360));
    if (t == 0 || t % 5 == 0) {
      strokeWeight(10);
      line(0, rad - hourTick, 0, rad - tickGap);
    } else {
      strokeWeight(3);
      line(0, rad - secondTick, 0, rad - tickGap);
    }
    pop();
  }
}

//   push();
//
//   fill(0);
//
//   beginShape(QUADS);
//   for (var a = 0; a < 360; a += 15) {
//     var angle = radians(a);
//     var x2 = x + cos(angle) * secondsR;
//     var y2 = y + sin(angle) * secondsR;
//
//     //translate(0, 0);
//     //rotate(angle);
//     vertex(x2, y2);
//     vertex(x2, y2 + 20);
//     vertex(x2 + 10, y2 + 20);
//     vertex(x2 + 10, y2);
//     //vertex();
//   }
//   endShape();
//   pop();
// }
//
