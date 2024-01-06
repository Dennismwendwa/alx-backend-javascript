import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    const ClonedCar = super.constructor[Symbol.species];
    return new ClonedCar();
  }
}
export default EVCar;
