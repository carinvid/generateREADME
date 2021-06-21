// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const fs = require("fs");
const inquirer = require("inquirer");
const generateREADME = require('./utils/generateMarkdown')

inquirer
  .prompt([
    {
      name: "Github username (Require)",
      type: "input",
      message: "What is your Github username?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your Github name!');
          return false;
        }
      }
    },
    },
    {
      name: "Contact",
      type: "input",
      message: "What is your email address? (Require)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    },
    },
    {
      name: "Project",
      type: "input",
      message: "What is your Project's name?(Require)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your Project name!');
          return false;
        }
      }
    },
    },
    {
      name: "Description",
      type: "input",
      message: "Please write a short description of your project ",
    },
    {
      name: "License",
      type: "checkbox",
      message: "Please choice the type of your license :",
      choices: [
        "Apache license 2.0",
        "Boost Software License 1.0",
        "Mozilla Public License 2.0",
        "Open Software License 3.0",
        "GNU Lesser General Public License v3.0",
        "GNU General Public License family",
        "No license",
      ],
    },
    {
      name: "Command",
      type: "checkbox",
      message: "What command should be to install dependencies?",
      choices: ["google", "VS", "npm i", "node", "no clue"],
    },
    {
      name: "Test",
      type: "checkbox",
      message: "What command you should run to run Test?",
      choices: ["run test", "run Run", "run Tester"],
    },
    {
      name: "About the Repo",
      type: "input",
      message: "What does the user need to know about using the rep?",
    },
    {
      name: "Contribution",
      type: "input",
      message:
        "What does the user need to know about contributing to the repo?",
    },
  ]).then(())
  
  });

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
