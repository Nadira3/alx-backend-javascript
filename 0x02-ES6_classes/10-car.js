class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const newCar = Object.create(this);
    newCar._brand = undefined;
    newCar._motor = undefined;
    newCar._color = undefined;
    return newCar;
  }
}

export default Car;
