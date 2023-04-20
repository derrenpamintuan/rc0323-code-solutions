/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = (perimeter / 4) * (perimeter / 4);
    this.perimeter = perimeter;
  }

  describe() {
    return 'area: ' + this.area + ' perimeter: ' + this.perimeter;
  }
}

const newShape = new Shape(5, 10);
console.log(newShape.describe());
