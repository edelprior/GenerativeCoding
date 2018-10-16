# Pixel Arrays Final Result


### LerpColor();
Requires three parameters ( 1. Start Color 2. End Color 3. 0.5);
returns a Color Object (last exercise) half way between

___
## Pixel Arrays // Images

Mostly, Images need to be pre-loaded so it's in memory.
Needs to be put in in LocalHost image.loadImage
<br />

An image is a series of Pixels or a PixelArray

### How to target a specific PixelArray
```js
(gridY + width + gridX) * 4
```

## *Step One*

 Helpful function that stops draw() running in a loop
``` javascript
 noLoop();
```
___

Loads the pixels data into a [] in 'preperation' for image manipulation.
<br />

Returns the value of the value in the [0] array

___

``` javascript
function draw() {
img.loadPixels();



console.log(img.pixels[0]);
console.log(img);
}
```

___
___


## *Step Two*




``` javascript

function draw() {
  // define the amount of tiles
  let tileCount = 2;
  // define the width of each of them (the X value)
  let rectSize = width / tileCount;
  img.loadPixels();
  //empty color[] everytime draw() exec
  colors = [];

  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      //pixel value along the X and Y axis
      let pixelX = int(gridX * rectSize);
      let pixelY = int(gridY * rectSize);
      // Allowing the X and Y value to be used to target specific indexes in the []
      // 4 vars in each object hence *4
      var i = (pixelY * img.width + pixelX * 4);

      // making a color object
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colors.push(c);

      console.log(colors);
    }
  }
}
```
