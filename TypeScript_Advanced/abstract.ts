// Abstract Example

abstract class Shape {
  abstract getArea(): number;

  display(): void {
    console.log("This is a shape.");
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const rect = new Rectangle(10, 5);
console.log("Area:", rect.getArea());
