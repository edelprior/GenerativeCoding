
function setup(){
createCanvas(windowWidth,windowHeight);
noStroke();
colorMode(HSB, 360, 10, 10);
var segmentCount = 360;

}


function draw() {
var segmentCount = 360;
    var angle = 0;
    //map(mouseY, 0, height, 1, 60);
    var angleIncrement = 360/ segmentCount;
    var radius = width/2;

    beginShape(TRIANGLE_FAN);
    vertex(width/2, height/2);

    for(var angle = 0; angle<=370; angle = angle + angleIncrement){
        var VX = radius * cos(radians(angle)) + width/2;
        var VY = radius * sin(radians(angle)) + height/2;
        fill(angle,100, 100);
        vertex(VX, VY);

    }

        endShape();

}
function keyPressed(){
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

    switch (key) {

            case'1':
            segmentCount = 360;
            break;

            case'2':
            segmentCount = 45;
            break;

            case'3':
            segmentCount = 24;
            break;

            case'4':
            segmentCount = 12;
            break;

            case'5':
            segmentCount = 6;
            break;

    }

}
