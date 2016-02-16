function Airport()  {
  this.landedPlanes = [];
  this.DEFAULTCAPACITY = 20;
}

Airport.prototype.land = function(plane) {
  if (this.landedPlanes.length >= this.DEFAULTCAPACITY)
    throw "Airport is full, jog on";
  else if (this.isStormy()) {
    throw "It's raining men! Hallelujah! (But you can't land.)";
  }
  else {
    this.landedPlanes.push(plane);
  }
};

Airport.prototype.takeOff = function(plane) {
  if (this.isStormy()) {
    throw "It's raining men! Hallelujah! (But you can't take off.)";
  }
  else {
  this.landedPlanes.pop(plane);
  }
};

Airport.prototype.isStormy = function() {
  var newWeather = new Weather
  if (newWeather.setWeather() === "stormy") {
    return true
  }
  else {
    return false
  }
};
