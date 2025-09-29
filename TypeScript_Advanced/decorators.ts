// Intro to Decorators
// Note: Enable "experimentalDecorators": true in tsconfig.json

function Logger(constructor: Function) {
  console.log("Logging class:", constructor.name);
}

@Logger
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p = new Person("Chandon");
