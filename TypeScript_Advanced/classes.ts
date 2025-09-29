// Classes Example

class Car {
  brand: string;
  year: number;

  constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
  }

  display(): void {
    console.log(`${this.brand} was made in ${this.year}`);
  }
}

const car1 = new Car("Toyota", 2020);
car1.display();
