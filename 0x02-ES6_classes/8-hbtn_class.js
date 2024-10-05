class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  valueOf() {
    return this._size; // When cast to Number
  }

  toString() {
    return this._location; // When cast to String
  }
}

export default HolbertonClass;
