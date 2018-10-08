/* Creative Coding
   Edel Prior
   October 2018 (week 3)
   Notes
*/

let img;
let colors = [];
let sortMode = null;

function preload() {
  img = loadImage('data/image.jpg');
}

function setup(){

createCanvas(500,500);
noCursor();
noStroke();

// Helpful function that stops draw() running in a loop
    noLoop();
}


function draw() {

    // loads the pixels data into a [] in 'preperation' for image manipulation
    
img.loadPixels();


// returns the value of the value in the [0] array
console.log(img.pixels[0]);
console.log(img);

    }
  


// Will have to run on  a server (download live-server package in Atom)
// access by going to command pallette [cmd + shift + P] and typing live-server
// access through folder directory
