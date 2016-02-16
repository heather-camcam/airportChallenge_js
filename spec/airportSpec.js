// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport and confirm that it has landed

describe("Airport", function() {

  var plane;
  var airport;
  // var capacity = airport.DEFAULTCAPACITY;

  beforeEach(function() {
    airport = new Airport();
  });

  it("instructs a plane to land and confirms has landed", function() {
    airport.land(plane);
    expect(airport.landedPlanes).toContain(plane);
  });

  // As an air traffic controller
  // So I can get passengers on the way to their destination
  // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

  it("instructs a plane to take off and confirms has left the airport", function() {
    airport.takeOff(plane);
    expect(airport.landedPlanes).not.toContain(plane);
  });

  // As an air traffic controller
  // To ensure safety
  // I want to prevent landing when the airport is full

  it("prevents a plane from landing when aiport full", function() {
    for(i = 0; i < (airport.DEFAULTCAPACITY); i ++) {
      airport.land(plane);
    }
    expect( function(){airport.land(plane); } ).toThrow("Airport is full, jog on");
  });

  // As the system designer
  // So that the software can be used for many different airports
  // I would like a default airport capacity that can be overridden as appropriate

  it("can override the DEFAULTCAPACITY", function() {
    airport.DEFAULTCAPACITY = 30;
    expect(airport.DEFAULTCAPACITY).toEqual (30);
    for(i = 0; i < (airport.DEFAULTCAPACITY); i ++) {
      airport.land(plane);
    }
    expect(airport.landedPlanes.length).toEqual (30);
  });

});

//
//
// As an air traffic controller
// To ensure safety
// I want to prevent takeoff when weather is stormy
//
// As an air traffic controller
// To ensure safety
// I want to prevent landing when weather is stormy
