class Currency {
  constructor(code, name) {
    this._code = '';
    this._name = '';

    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._code;
  }

  set name(value) {
    this._name = value;
  }

  displayFullCurrency() {
    const attri = `${this._name} (${this._code})`;
    return attri;
  }
}
export default Currency;
