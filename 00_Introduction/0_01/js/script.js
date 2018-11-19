

var tileCountX = 2;
var tileCountY = 10;

// I love John Montayne! <3 <3 <3

function setup(){
createCanvas(900,500);
noStroke();
colorMode(HSB, 360, 10, 10);


}


function draw() {
tileCountX = int(map(mouseX,0,width,2,100));
tileCountY = int(map(mouseY,0,width,2,10));

