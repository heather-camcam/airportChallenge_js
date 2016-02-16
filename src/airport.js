function Airport()  {
  this.landedPlanes = [];
  DEFAULTCAPACITY = 20;
}

Airport.prototype.land = function(plane) {
  if (this.landedPlanes.length >= DEFAULTCAPACITY)
    throw "Airport is full, jog on";
  else
    this.landedPlanes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  this.landedPlanes.pop(plane);
};
