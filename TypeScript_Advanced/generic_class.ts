// Generic Class Example

class Storage<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }
}

const numberStorage = new Storage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
console.log(numberStorage.getItems());

const stringStorage = new Storage<string>();
stringStorage.addItem("Hello");
stringStorage.addItem("World");
console.log(stringStorage.getItems());
