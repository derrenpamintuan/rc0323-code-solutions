/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(radius, radius);
    this.perimeter = 2 * Math.PI * radius;
    this.area = Math.PI * (radius ** 2);
    this.radius = radius;
  }

  getRadius() {
    return this.describe() + ' radius: ' + this.radius;
  }
}

const newCircle = new Circle(5);
console.log(newCircle.getRadius());
