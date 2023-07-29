// Circle
class Circle {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  create(text, textColor) {
    return `
    <svg height="100" width="100">
    <circle cx="50" cy="50" r="40" stroke="${this.shapeColor}" stroke-width="3" fill="${this.shapeColor}" />
    <text x="50%" y="50%" text-anchor="middle" stroke="${textColor}" stroke-width="1px" dy=".3em">${text}</text>
    </svg>
    `;
  }
}

// Triangle

// Square
