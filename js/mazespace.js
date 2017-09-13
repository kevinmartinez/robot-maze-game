'use strict';

// Constructor for the mace space direction objects
function MazeSpace() {
  this.north = 'false'; // false == placeholder value
  this.east = 'false';
  this.south = 'false';
  this.west = 'false';
}

// Create method to set walls
MazeSpace.prototype.setWall = function (direction) {
  this[direction] = true;
};
