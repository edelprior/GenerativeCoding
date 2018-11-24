function DrawSineWave() {
  sineGraphic.xstep = 1;
  sineGraphic.lastx = -999;
  sineGraphic.lasty = -999;
  sineGraphic.angle = 0;
  sineGraphic.y = 50;
  for (var x = 20; x <= 480; x += xstep) {
    var rad = radians(sineGraphic.angle);
    sineGraphic.y = 50 + sin(rad) * 40;
    if (sineGraphic.lastx > -999) {
      stroke(255, 0, 0);
      noFill();
      line(x, sineGraphic.y, sineGraphic.lastx, sineGraphic.lasty);
    }

    sineGraphic.lastx = x;
    sineGraphic.lasty = y;
    sineGraphic.angle++;
  }
}
