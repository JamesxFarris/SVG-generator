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
// Circle
export class Circle extends Shape {
  create(text) {
    return `
        <svg height="200" width="300">
          <circle cx="150" cy="100" r="50" stroke="${
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
          <polygon points="150,18 244,182 56,182" fill="${this.shapeColor}" />
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
