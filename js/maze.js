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
