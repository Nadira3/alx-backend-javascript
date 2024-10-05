import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call parent constructor
    this._range = range; // Additional property
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color); // Return Car instance
  }
}

export default EVCar;
