var stepX = 495;
var stepY = 470;
function setup(){
createCanvas(windowWidth, windowHeight);
noStroke();
colorMode(HSB, width, height, 100);


}


function draw() {

    stepX = mouseX/5;
    stepY = mouseY/5;

    for(var gridY=0; gridY<height; gridY=gridY+stepX){

        for(var gridX=0; gridX<width; gridX=gridX+stepY) {

            fill(gridX,height-gridY, 100);
            rect(gridX,gridY,stepX,stepY);
        }
    }
}
