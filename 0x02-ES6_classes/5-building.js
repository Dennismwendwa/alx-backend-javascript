class Building {
  constructor(sqft) {
    this._sqft = '';

    this.sqft = sqft;

    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'functiom') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() {
    return this._sqft;
  }
  
  set sqft(value) {
    this._sqft = value;
  }
}
export default Building;
