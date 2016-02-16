function Airport()  {
  this.landedPlanes = [];
  this.DEFAULTCAPACITY = 20;
}

Airport.prototype.land = function(plane) {
  if (this.landedPlanes.length >= this.DEFAULTCAPACITY)
    throw "Airport is full, jog on";
  else
    this.landedPlanes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  this.landedPlanes.pop(plane);
};
