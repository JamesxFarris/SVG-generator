const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

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

  // Promt for shape (list)

  // Prompt for shape color
];
