// Utility Types Example

interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

type PartialUser = Partial<User>;  // all properties optional
type ReadonlyUser = Readonly<User>; // cannot modify properties
type PickUser = Pick<User, "id" | "name">; // select specific fields
type OmitUser = Omit<User, "email">; // exclude a field

const user1: PartialUser = { name: "Rahim" };
const user2: ReadonlyUser = { id: 1, name: "Karim", email: "k@example.com" };
const user3: PickUser = { id: 2, name: "Sami" };
const user4: OmitUser = { id: 3, name: "Anik", age: 25 };
