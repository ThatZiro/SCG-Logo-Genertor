const fs = require("fs");
const inquirer = require('inquirer');
const {Triangle, Square, Circle} = require('./lib/shapes');

function Start(){
    const validateText = (input) => {
        if (input.length <= 3) {
          return true;
        } else {
          return 'Text input must be no more than 3 characters.';
        }
      };

    inquirer
    .prompt([
      {
        type: 'input',
        name: 'background',
        message: 'Enter the shape color:',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['Square', 'Circle', 'Triangle'],
      },
      {
        type: 'input',
        name: 'text',
        message: 'Enter the text input:',
        validate: validateText,
      },
      {
        type: 'input',
        name: 'color',
        message: 'Enter the text color:',
      },
    ])
    .then((answers) => {
        RenderShape(answers);
    });
}

function RenderShape(input){
    console.log(input);
    const fileName = "./output/logo.svg"
    let newShape;
    switch(input.shape){
        case "Square":
            newShape = new Square(input);
            break;
        case "Circle":
            newShape = new Circle(input);
            break;
        case "Triangle":
            newShape = new Triangle(input);
            break;
    }
    fs.writeFile(fileName, newShape.innerHTML(), (err) => {
        if (err) console.error(err);
        else console.log(`File ${fileName} has been saved.`);
      });
}

Start();