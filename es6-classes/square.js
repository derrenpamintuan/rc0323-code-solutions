/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(width) {
    super(width, width);
    this.perimeter = width * 4;
    this.area = width * width;
    this.width = width;
  }

  getWidth() {
    return this.describe() + ' width: ' + this.width;
  }
}

const newSquare = new Square(2.5);
console.log(newSquare.getWidth());
