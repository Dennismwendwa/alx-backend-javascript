import Currency from './3-currency.js';

class Pricing {
  constructor(amount, currency) {
    this._amount = 0;
    this._currency = '';

    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw new TypeError('Currency must be instance of Currency class');
    }
  }

  displayFullPrice() {
    const attri = `${this._amount} ${this._currency._name} (${this._currency._code})`;
    return attri;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
export default Pricing;
