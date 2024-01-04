import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    const clonedCar = super.constructor[Symbol.species];
    return new clonedCar();
  }
}
export default EVCar;
