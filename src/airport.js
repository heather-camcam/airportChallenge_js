function Airport()  {
  this.landedPlanes = [];
}

Airport.prototype.land = function(plane) {
  this.landedPlanes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  this.landedPlanes.pop(plane);
};
