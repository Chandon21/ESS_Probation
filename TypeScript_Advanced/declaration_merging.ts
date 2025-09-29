// Declaration Merging Example

interface Book {
  title: string;
}

interface Book {
  author: string;
}

const myBook: Book = {
  title: "TypeScript Guide",
  author: "John Doe",
};

console.log(myBook);
