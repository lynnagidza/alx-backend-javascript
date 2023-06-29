export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.verifyString(name, 'Name');
    this._length = this.verifyNumber(length, 'Length');
    this._students = this.verifyArrayOfStrings(students, 'Students');
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.verifyString(newName, 'Name');
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this.verifyNumber(newLength, 'Length');
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this.verifyArrayOfStrings(newStudents, 'Students');
  }

  verifyString(value, attributeName) {
    if (typeof value === 'string') {
      return value;
    }
    throw new TypeError(`${attributeName} must be a string`);
  }

  verifyNumber(value, attributeName) {
    if (typeof value === 'number') {
      return value;
    }
    throw new TypeError(`${attributeName} must be a number`);
  }

  verifyArrayOfStrings(value, attributeName) {
    if (Array.isArray(value) && value.every((item) => typeof item === 'string')) {
      return value;
    }
    throw new TypeError(`${attributeName} must be an array of strings`);
  }
}
