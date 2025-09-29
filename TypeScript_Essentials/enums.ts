// Enums Example

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

function move(direction: Direction): void {
  console.log("Moving:", direction);
}

move(Direction.Up);
move(Direction.Left);
