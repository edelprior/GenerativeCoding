# Color spectrum in a Grid

A 2D grid with 'rects' on the X and Y axis needs to be drawn, 500 Width, 500 height.

### What Variables are instaniated?
*NumberOfColumns* = Amount of Rectangles going across on the X Axis
<br/>
*NumberOfRows* = Amount of Rectangles going down on the Y Axis
<br/>
*StepX* = the length at which each gridX is incremented along the X Axis `100 = Width / NumberOfColumns = StepX`
<br />
*StepY* = the length at which each gridY is incremented down the Y Axis  `100 = Height / NumberOfRows = StepY`

___
## Code Inception // Designing a Loop within a Loop

  ```javascript
  for (let gridY = 0; gridY < height; gridY += stepY) {
    for (let gridX = 0; gridX < width; gridX += stepX) {
      fill(gridX, height - gridY, 100);
      rect(gridX, gridY, stepX, stepY);
      }
    }
  ```

### Using the P5 Reference
MouseX and MouseY are predefined variables used in P5.
They can be very useful, and are gonna be used a lot throughout this module, so understand them _properly_

### What does P5 have to say?

The system variable mouseX always contains the current horizontal position of the mouse, relative to (0, 0) of the canvas. If touch is used instead of mouse input, mouseX will hold the x value of the most recent touch point.

### What's it look like in the Code?
  ```javascript
  rect(0, 0, mouseX, mouseX);
  ```
  Syntax for rectangle: ( X Location, Y Location, Width of Rect, Height of Rect);

# What does it look like on the Screen?
[]!(css/color_grid.png)
