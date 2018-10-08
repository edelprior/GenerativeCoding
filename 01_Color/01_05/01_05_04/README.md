# Pixel Arrays 


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
### Using the P5 Reference
Vertexes need to be used to make Triangles and hence, make circles

### What does P5 have to say?

All shapes are constructed by connecting a series of vertices. vertex() is used to specify the vertex coordinates for points, lines, triangles, quads, and polygons. It is used exclusively within the beginShape() and endShape() functions.

<br /> 

Using the beginShape() and endShape() functions allow creating more complex forms. beginShape() begins recording vertices for a shape and endShape() stops recording.

### What's it look like in the Code?
  ```javascript
beginShape();
  ```
