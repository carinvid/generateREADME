// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const fs = require("fs");
const inquirer = require("inquirer");
const { userInfo } = require("os");
const generateMarkdown = require("./util/generateMarkdown");
const writeFileAsync = util.promisify(writeToFile);

const questions = [
  {
    name: "Github username (Require)",
    type: "input",
    message: "What is your Github username?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your Github name!");
        return false;
      }
    },
  },

  {
    name: "Contact",
    type: "input",
    message: "What is your email address? (Require)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },

  {
    name: "Project",
    type: "input",
    message: "What is your Project's name?(Require)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your Project name!");
        return false;
      }
    },
  },

  {
    name: "Description",
    type: "input",
    message: "Please write a short description of your project ",
  },
  {
    name: "Installation",
    type: "input",
    message:
      "If applicable, describe the steps required to install your project for the Installation section.",
  },
  {
    name: "License",
    type: "checkbox",
    message: "Please choice the type of your license :(Require)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please choice the type of your license!");
        return false;
      }
    },
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
    name: "Usage",
    type: "input",
    message:
      "Provide instructions and examples of your project in use for the Usage section.",
  },
  {
    name: "Contributing",
    type: "input",
    message:
      "If applicable, provide guidelines on how other developers can contribute to your project.",
  },
  {
    name: "Tests",
    type: "input",
    message:
      "If applicable, provide any tests written for your application and provide examples on how to run them.",
  },
  {
    name: "About the Repo",
    type: "input",
    message: "What does the user need to know about using the rep?",
  },
  {
    name: "Contribution",
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
  },
];

promptUser().then((promptReadme) => {
  const generateREADME = data.promptReadme.split("").join("") + ".json";

  fs.writeFile("README.md", JSON, stringify(data, null, "\t"), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Sucess!");
  });
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Success! Your README.md file has been generated");
  });
}
// TODO: Create a function to initialize app
async function init() {
  try {
    const userResponses = await inquirer.prompt(questions);
    console.log("Your responses: ", userResponses);
    console.log("Thank you for your responses");

    console.log("Generating your README...");
    const markdown = generateMarkdown(userResponses, userInfo);
    console.log(markdown);

    await writeFileAsync("README.md", markdown);
  } catch (err) {
    console.log(error);
  }
}

// Function call to initialize app
init();
