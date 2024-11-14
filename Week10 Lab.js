// Challenge 1 /////////////////////////////////////////////

// Constructor function for Car
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  
  // Method to accelerate
  Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  // Method to brake
  Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  // Create two Car objects and test the methods
  const car1 = new Car('BMW', 120);
  const car2 = new Car('Mercedes', 95);
  
  car1.accelerate(); // BMW is going at 130 km/h
  car1.brake();      // BMW is going at 125 km/h
  
  car2.accelerate(); // Mercedes is going at 105 km/h
  car2.brake();      // Mercedes is going at 100 km/h

  
// Challenge 2  //////////////////////////////////////////////

// ES6 Class for CarCl
class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    // Getter for speed in mi/h
    get speedUS() {
      return this.speed / 1.6;
    }
  
    // Setter for speed in mi/h
    set speedUS(speed) {
      this.speed = speed * 1.6;
    }
  
    // Method to accelerate
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    // Method to brake
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  }
  
  // Create a new CarCl object and test methods, getter, and setter
  const car3 = new CarCl('Ford', 120);
  
  car3.accelerate();    // Ford is going at 130 km/h
  car3.brake();         // Ford is going at 125 km/h
  console.log(car3.speedUS); // Current speed in mi/h
  
  car3.speedUS = 50;    // Set speed in mi/h
  console.log(car3.speed);   // Check new speed in km/h

  
// Challenge 3 /////////////////////////////////////////////////////

// Constructor function for Car
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  
  // Electric Car (EV) constructor function that inherits from Car
  function EV(make, speed, charge) {
    Car.call(this, make, speed); // Call parent constructor
    this.charge = charge;
  }
  
  // Inherit Car's prototype methods
  EV.prototype = Object.create(Car.prototype);
  
  // Method to charge the battery
  EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} charged to ${this.charge}%`);
  };
  
  // Override accelerate method to consider battery charge
  EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
  };
  
  // Create an EV object and test methods
  const car4 = new EV('Tesla', 120, 23);
  
  car4.accelerate();     // Tesla going at 140 km/h, with a charge of 22%
  car4.brake();          // Tesla is going at 135 km/h
  car4.chargeBattery(90); // Tesla charged to 90%
  