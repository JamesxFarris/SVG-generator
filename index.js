import inquirer from "inquirer";
import fs from "fs";
import { Circle, Triangle, Square } from "./lib/shapes.js";

const questions = [
  // Prompt for letters
  {
    type: "input",
    name: "name",
    message: "What characters would you like on your logo?",
    validate: function (input) {
      if (input.length <= 3) {
        return true;
      } else {
        return "Please enter no more than 3 characters.";
      }
    },
  },
  //   Prompt for text color
  {
    type: "input",
    name: "color",
    message: "What color would you like your text to be?",
  },
  // Promt for shape (list)
  {
    type: "list",
    name: "shape",
    message: "What shape would you like to make your logo?",
    choices: ["Triangle", "Square", "Circle"],
  },
  // Prompt for shape color
  {
    type: "input",
    name: "shapeColor",
    message: "What color would you like your shape to be?",
  },
];

// Prompt user for input
function init() {
  inquirer.prompt(questions).then((answers) => {
    let shape;
    if (answers.shape === "Triangle") {
      shape = new Triangle(answers.shapeColor);
    } else if (answers.shape === "Square") {
      shape = new Square(answers.shapeColor);
    } else if (answers.shape === "Circle") {
      shape = new Circle(answers.shapeColor);
    }

    // Write the shape to the file
    fs.writeFile(
      "logo.svg",
      shape.create(answers.name, answers.color),
      (err) => {
        if (err) throw err;
        console.log("You have a new logo!");
      }
    );
  });
}
