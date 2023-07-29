import { Circle, Square, Triangle } from "./shapes.js";

class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  setTextColor(textColor) {
    this.textColor = textColor;
  }

  renderText(text) {
    return `<text x="150" y="100" text-anchor="middle" fill="${this.textColor}" dy=".3em">${text}</text>`;
  }
}

// Test to see if it renders a circle.
test("Circle", () => {
  const circle = new Circle("red"); // Create a new circle
  circle.setTextColor("black"); // Set the text color
  expect(circle.create("test").replace(/\s/g, "")).toEqual(
    // Remove all whitespace
    `
    <svg height="200" width="300">
      <circle cx="150" cy="100" r="50" stroke="red" stroke-width="3" fill="red" />
      <text x="150" y="100" text-anchor="middle" fill="black" dy=".3em">test</text>
    </svg>`.replace(/\s/g, "")
  );
});

// Square test
test("Square", () => {
  const square = new Square("blue");
  square.setTextColor("white"); // Set the text color
  expect(square.create("test").replace(/\s/g, "")).toEqual(
    `
    <svg height="200" width="300">
      <rect width="150" height="150" x="75" y="75" stroke="blue" stroke-width="3" fill="blue" />
      <text x="150" y="100" text-anchor="middle" fill="white" dy=".3em">test</text>
    </svg>`.replace(/\s/g, "")
  );
});

// Triangle test
test("Triangle", () => {
  const triangle = new Triangle("green");
  triangle.setTextColor("yellow"); // Set the text color
  expect(triangle.create("test").replace(/\s/g, "")).toEqual(
    `
    <svg height="200" width="300">
      <polygon points="150,18 244,182 56,182" fill="green" />
      <text x="150" y="100" text-anchor="middle" fill="yellow" dy=".3em">test</text>
    </svg>`.replace(/\s/g, "")
  );
});
