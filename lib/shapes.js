class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  setTextColor(textColor) {
    this.textColor = textColor;
  }

  renderText(text) {
    return `<text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" dy=".3em">${text}</text>`;
  }
}
// Circle
export class Circle extends Shape {
  create(text) {
    return `
        <svg height="200" width="300">
          <circle cx="50%" cy="50%" r="75%" stroke="${
            this.shapeColor
          }" stroke-width="3" fill="${this.shapeColor}" />
          ${this.renderText(text)}
        </svg>
      `;
  }
}

// Triangle
export class Triangle extends Shape {
  create(text) {
    return `
        <svg height="200" width="300">
          <polygon points="160,10 275,200 30,200" fill="${this.shapeColor}" />
          ${this.renderText(text)}
        </svg>
      `;
  }
}

// Square
export class Square extends Shape {
  create(text) {
    return `
        <svg height="200" width="300">
          <rect width="150" height="150" x="75" y="75" stroke="${
            this.shapeColor
          }" stroke-width="3" fill="${this.shapeColor}" />
          ${this.renderText(text)}
        </svg>
      `;
  }
}
