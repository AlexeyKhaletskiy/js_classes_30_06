"use strict";

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this._from;
  }
  set from(from) {
    if (typeof from !== "number") {
      throw new TypeError("Must be a number");
    }
    if (from >= this._to) {
      throw new RangeError("From must be lower than to");
    }
    return (this._from = from);
  }
  get to() {
    return this._to;
  }
  set to(to) {
    if (typeof to !== "number") {
      throw new TypeError("Must be a number");
    }
    if (to <= this._from) {
      throw new RangeError("To must be bigger than from");
    }

    return (this._to = to);
  }
  get range() {
    return [this._from, this._to];
  }
  validate(number) {
    if (number < this._from || number > this._to) {
      throw new RangeError(
        `${number} is out of range from ${this._from} to ${this._to}`
      );
    }
    if (typeof number !== "number") {
      throw new TypeError("Must be a number");
    }
    return number;
  }
}

const range = new RangeValidator(3, 15);
