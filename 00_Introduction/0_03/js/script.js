var stepX = 95;
var stepY = 70;
function setup(){
createCanvas(900,500);
noStroke();
colorMode(HSB, width, height, 100);


}


function draw() {
    
    stepX = mouseX/5 + 1;
    stepY = mouseY/5 + 1;

    for(var gridY=0; gridY<height; gridY=gridY+stepX){
        
        for(var gridX=0; gridX<width; gridX=gridX+stepY) {
            
            fill(gridX,height-gridY, 100);
            rect(gridX,gridY,stepX,stepY);
        }
    }
}