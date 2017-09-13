'use strict';

// Create a maze constructor
function Maze(width, height) {
  this.width = width; // X coordinate
  this.height = height; // Y coordinate
  this.startX = null;
  this.startY = null;
  this.startOrientation = null;
  this.endX = null;
  this.endY = null;
  // Create an multidimensional array to hold the Maze's spaces
  // Maze is 7x*5y so it should contain 35 spaces
  this.spaces = [];
  // Create array for X coordinates
  let x;
  let y;
  for (x = 1; x <= width; x += 1) {
    // Go through each column and create an array for it
    this.spaces[x] = [];
    // For each column, loop through each Y coordinate and add an element to the array
    for (y = 1; y <= height; y += 1) {
      // Add one element to the array for each space in the column
      this.spaces[x][y] = '('+ x + ',' + y + ')';
    }
  }
}

// Add a setter method to Maze() with the prototype prop

// Set Robots start position
Maze.prototype.setStart = function (x, y, orientation) {
  this.startX = x;
  this.startY = y;
  this.startOrientation = orientation;
};

// Set Robots end position
Maze.prototype.setEnd = function (x, y) {
  this.endX = x;
  this.endY = y;
};
