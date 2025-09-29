// Inheritance Example

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Some generic sound...");
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): void {
    console.log(`${this.name} says: Woof!`);
  }
}

const dog = new Dog("Buddy");
dog.makeSound();
