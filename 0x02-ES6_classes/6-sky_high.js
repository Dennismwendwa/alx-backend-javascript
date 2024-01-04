import Building from './5-building.js';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);

    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }
  
  set floors(value) {
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }  
}

export default SkyHighBuilding;
