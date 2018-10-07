# Color Wheels


### What Variables are instaniated?
 *numberOfSteps*  = 20;
 *angleSize* = 360 / numberOfSteps;
 *radius* = 200;

___
## Thinking about Color Wheels as Triangular Fans


  ```javascript
  for (let gridY = 0; gridY < height; gridY += stepY) {
    for (let gridX = 0; gridX < width; gridX += stepX) {
      fill(gridX, height - gridY, 100);
      rect(gridX, gridY, stepX, stepY);
      }
    }
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
