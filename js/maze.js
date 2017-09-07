'use strict';

// Create a maze constructor
function Maze (width, height) {
    this.width = width; // X coordinate
    this.height = height; // Y coordinate

    this.startX = null;
    this.startY = null;
    this.startOrientation = null;
    this.endX = null;
    this.endY = null;
}

// Add a setter method to Maze() with the prototype prop

// Set Robots start position
Maze.prototype.setStart = function(x, y, orientation) {
    this.startX = x;
    this.startY = y;
    this.startOrientation = orientation;
};

// Set Robots end position
Maze.prototype.setEnd = function(x, y) {
    this.endX = x;
    this.endY = y;
}
