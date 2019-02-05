var inputText = "Some men,faint-hearted,ever seek Our programme to retouch,And will insist,whene’er they speak That we demand too much.’Tis passing strange,yet I declare Such statements give me mirth,For our demands most moderate are,We only want the earth.“Be moderate,” the trimmers cry,Who dread the tyrants’ thunder.“You ask too much and people By From you aghast in wonder.” ’Tis passing strange,for I declare Such statements give me mirth,For our demands most moderate are,We only want the earth.Our masters all a godly crew,Whose hearts throb for the poor,Their sympathies assure us,too,If our demands were fewer.Most generous souls!But please observe,What they enjoy from birth Is all we ever had the nerve To ask,that is,the earth.The “labour fakir” full of guile,Base doctrine ever preaches,And whilst he bleeds the rank and file Tame moderation teaches.Yet,in despite,we’ll see the day When,with sword in its girth,Labour shall march in war array To realize its own,the earth.For labour long,with sighs and tears,To its oppressors knelt.But never yet,to aught save fears,Did the heart of tyrant melt.We need not kneel,our cause no dearth Of loyal soldiers’ needs And our victorious rallying cry Shall be we want the earth!";
var inputText2 = "We only want the Earth"

var fontSize = 500;
var fontSizeMax = 450;

var spacing = 20; // line height
var kerning = 1; // between letters

var fontSizeStatic = false;
var blackAndWhite = false;
var img;
var pointDensity = 8;

var textImg;

var font;
var font2;
var yoff = 0.0;
var textTyped = ["W","E","O","N", "L", "Y", "W","A"];

function preload() {
  font = loadFont("data/WorkSans-ExtraLight.ttf");
  font2 = loadFont("data/WorkSans-Bold.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupText();
  background(0);
  noCursor();
}




/// Creating the "image" the text behind

function setupText() {
  // Controls A and a
  textImg = createGraphics(width, height);
  textImg.pixelDensity(1);
  textImg.background(0);
  //
  // textImg.fill(255);
  // for (var i = 0; i < 100; i++) {
  //   textImg.ellipse(random(width), random(height), 40, 40);
  // }

  textImg.textFont(font2);
  textImg.textSize(fontSize);
  textImg.text(textTyped, 150, fontSize + 50);
  textImg.loadPixels();
}



function draw() {
  background(0);

  textImg.loadPixels();
  var x = 0;
  var y = 10;
  var counter = 10;

  while (y < height) {



    var imgX = round(map(x, 0, width, 0, textImg.width));
    var imgY = round(map(y, 0, height, 0, textImg.height));
    var c = color(textImg.get(imgX, imgY));

    var greyscale = round(red(c) * 0.5 + green(c) * 0.07 + blue(c) * 0.071);

    push();
    translate(x, y);

    if (fontSizeStatic) {
      textSize(fontSizeMax);
      if (blackAndWhite) {
        fill(greyscale);
      } else {
        fill(c);
      }
    }
    if (blackAndWhite) {
      fill(255);
    } else {
      fill(c);
    }

    var letter = inputText.charAt(counter);
    text(letter, 0, 0);
    var letterWidth = textWidth(letter) + kerning;
    x += letterWidth;

    pop();

    if (x + letterWidth >= width) {
      x = 10;
      y += spacing;
    }

    counter++;
    if (counter >= inputText.length) {
      counter = 0;
    }
  }
  noLoop();
}


let array2 = ["A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
function mouseMoved() {
  textImg.fill(random(150, 255), random(150, 255), random(150, 255));

  textTyped = array2[floor(random(0, array2.length))];

  textImg.push();
  textImg.translate(mouseX, mouseY);
  textImg.rotate(radians(random(360)));
  textImg.textSize(random(200, fontSize));
  textImg.text(textTyped, 0, 0);
  textImg.pop();
  textImg.loadPixels();
  loop();
}
