<<<<<<< HEAD
/*
Creative Coding
Author: Cillian Tighe
Student No: N00152737
*/

// Variables used to create the intro text display
// 'desiredWidth' is used for the width of the divider between text
// 'dividerWidth' is the current size for the divider
// 'displayTime' is the amount of time (seconds) for the text to be displayed
// 'timePassed' is used to keep track of the time passed since the animation started
// 'displayText' is a boolean to keep track if the text is being displayed
// 'textAlpha' is the variable to change the text's opacity
var desiredWidth = 750;
var dividerWidth = 0;
var displayTime = 5;
var timePassed = 0;
var textAlpha = 1;
var headerFont = "";
var descFont = "";

var seedNum = 0;
var shapeCap = "";

=======

var seedNum = 0;
>>>>>>> 64111124579154268bb66a4098a3ec15cd13d505
var noOfShapes = 30;
var shapeWidth = 0;
var shapeHeight = 0;

// The 'setup' function is only called once. Everything within the function is executed once
function setup() {
<<<<<<< HEAD
  // Creates the canvas for the animation to be displayed on
  var canvas = createCanvas(windowWidth, windowHeight);
  shapeWidth = width / noOfShapes;
  shapeHeight = height / noOfShapes;

  shapeCap = SQUARE;

  // Setting the colour mode of the canvas
  // Using the 'rectMode' function to draw rectangles from the center
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  ellipseMode(CORNER);
}

// The 'draw' function is called in a loop. Everything that is in the function is executed continuously
function draw() {
  // Time passed will hold the amount of time passed in seconds
  timePassed = millis() / 1000;

  randomSeed(seedNum);

  background(0, 0, 100);
  for (var y = 0; y <= noOfShapes; y++) {
=======
   createCanvas(windowWidth, windowHeight);
  shapeWidth = width / noOfShapes;
  shapeHeight = height / noOfShapes;
  rectMode(CENTER);
}
function draw() {
  background(0,0,125);
  randomSeed(seedNum);
    for (var y = 0; y <= noOfShapes; y++) {
>>>>>>> 64111124579154268bb66a4098a3ec15cd13d505
    for (var x = 0; x <= noOfShapes; x++) {
      let rand = Math.floor(random(0, 2));
      push();
      translate(x * shapeWidth, y * shapeHeight);
<<<<<<< HEAD
      //rotate(radians(90));
      fill('#000000');
      strokeWeight(10);
      strokeCap(shapeCap);
      stroke('#000000')
      //scale(1 / 3);
      if (rand === 0) {
        strokeWeight(map(constrain(mouseX, 0, width), 0, width, 1, 10));
        line(-shapeWidth / 2, shapeHeight / 2, shapeWidth / 2, -shapeHeight / 2);
      } else {
        strokeWeight(map(constrain(mouseY, 0, height), 0, height, 1, 10));
        line(-shapeWidth / 2, -shapeHeight / 2, shapeWidth / 2, shapeHeight / 2);
      }
      pop();
    }
  }

  //---------------------------------------------------------
  // ---------- FUNCTION FOR DISPLAYING INTRO TEXT ----------
  //---------------------------------------------------------
  if (textAlpha > 0) {
    // Setting the font size, type and alignment for the intro text
    textSize(60);
    textFont(headerFont);
    textAlign(CENTER);
    fill(0, 0, 0, textAlpha);
    text("Generative Design: Shape", width / 2, height / 2.1);

    // The rectangle below will act as a divider between the two text fields
    rect(width / 2, height / 2, dividerWidth, 3);

    // Changing the font size, type for the font below
    textSize(40);
    textFont(descFont);
    text("Nested Patterns", width / 2, height / 1.8);

    // The condition below checks to see if the desired display time for the text
    // has been reached and if the size of the divider has reached it's size
    // If it has, it will then start to reduce the text's opacity
    if (timePassed > displayTime && dividerWidth >= desiredWidth) {
      textAlpha -= 0.02;
    } else if (dividerWidth <= desiredWidth) {
      dividerWidth += 5;
    }
  } else {
    textSize(20);
    textFont(headerFont);
    textAlign(LEFT);
    fill(0, 0, 0);
    text("03_nested_patterns", 25, 30);
  }
}

function mousePressed(){
  seedNum = Math.floor(random(100));
}

// Using the built-in function 'keyPressed' to check whether the user presses a key
// If the user presses the 's' key, the script will export an image of the canvas
function keyPressed() {
  if (key == "s" || key == "S") saveCanvas(canvas, "03_nested_patterns", "png");
  if (key == 1) shapeCap = ROUND;
  if (key == 2) shapeCap = SQUARE;
  if (key == 3) shapeCap = PROJECT;
}
=======
      fill(250,215,0);
      strokeCap(PROJECT);
      stroke(250,215,0)
      if (rand === 0) {
        strokeWeight(map(mouseX, 0, width, 1, 10));
        line(-shapeWidth /4 , shapeHeight/ 4, shapeWidth/4, -shapeHeight/4);
      } else {
        strokeWeight(map(mouseY, 0, height, 1, 10));
        line(-shapeWidth / 4, -shapeHeight / 4, shapeWidth / 4, shapeHeight / 4);
      }
      pop();
    }
  }
}
>>>>>>> 64111124579154268bb66a4098a3ec15cd13d505
