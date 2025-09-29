// Generics Example

function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(100));
console.log(identity<string>("Hello"));

class Box<T> {
  private content: T;

  constructor(value: T) {
    this.content = value;
  }

  getContent(): T {
    return this.content;
  }
}

const numberBox = new Box<number>(500);
console.log(numberBox.getContent());

const stringBox = new Box<string>("TypeScript");
console.log(stringBox.getContent());
