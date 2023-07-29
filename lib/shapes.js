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
        <svg height="100" width="100">
          <circle cx="50" cy="50" r="40" stroke="${
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
        <svg height="100" width="100">
          <polygon points="50,5 90,90 10,90" fill="${this.shapeColor}" />
          ${this.renderText(text)}
        </svg>
      `;
  }
}

// Square
export class Square extends Shape {
  create(text) {
    return `
        <svg height="100" width="100">
          <rect width="80" height="80" x="10" y="10" stroke="${
            this.shapeColor
          }" stroke-width="3" fill="${this.shapeColor}" />
          ${this.renderText(text)}
        </svg>
      `;
  }
}
