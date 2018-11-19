'use strict';


var colorLeft = [];
var colorRight = [];
var myColor;
var numberofRows = 5;
var numberofCols = 5;




function setup() {
    createCanvas(1000, 1000);
    colorMode(HSB);
    noStroke();
    myColor = color(123,123,35);
    shakeColor();
 
}

function draw() {
    
    var tileWidth = width/numberofCols;
    var tileHeight = height/numberofRows;
    
    for(var gridY = 0; gridY < numberofRows; gridY++){
        
        for(var gridX = 0; gridX < numberofCols; gridX++){
            
                var amount = map(gridX, 0, 5, 0, 1);
                var startColor = colorLeft[gridY];
                var endColor = colorRight[gridY];

            
                var interColor = lerpColor(startColor, endColor, amount);
                
                fill(interColor);
                var posX = tileWidth * gridX ; 
                var posY = tileHeight * gridY ; 

                rect(posX, posY, tileWidth, tileHeight);
            }
        }
}
 
function shakeColor() {
    
    for(var i=0; i<numberofRows; i++) {
        colorLeft[i] = color(random(0,60), random(0,100), 100);
        colorRight[i] = color(random(0,60), random(0,100), 100);
    
        console.log(colorLeft);
        console.log(colorRight);
    }
}

        
//var randomColor = color(random(0, 255), random(0, 255), random(0, 255));
// colorLeft.push(randomColor);
//    colorLeft[random(0, math.floor(colorLeft.length))];
    