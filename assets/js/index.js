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


class Figure3D {
  constructor(name) {
    this.name = name;
  }
  getVolume() {
    return null;
  }
}

class Cube extends Figure3D {
  constructor(side) {
    super("Cube");
    this.side = side;
  }
  getVolume() {
    return this.side ** 3;
  }
}

const cube = new Cube(3);

class Sphere extends Figure3D {
  constructor(radius) {
    super("Sphere");
    this.radius = radius;
  }
  getVolume() {
    return (4 / 3) * Math.PI * this.radius ** 3;
  }
}

const sphere = new Sphere(4);

class Cylinder extends Figure3D {
  constructor(radius, height) {
    super("Cylinder");
    this.radius = radius;
    this.height = height;
  }
  getVolume() {
    return Math.PI * this.radius ** 2 * this.height;
  }
}
const cylinder = new Cylinder(2, 3);
