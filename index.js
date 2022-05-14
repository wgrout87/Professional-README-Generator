// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const { writeFile } = require('./utils/generate-file.js');

const { generateMarkdown } = require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Please enter a description of your project.",
    "Please select the sections you would like to include in your README.",
    "What are the steps required to install your project.",
    "Please provide instructions and examples for use.",
    "Which license would you like to use?",
    "How can others contribute to this project?",
    "What tests can be run to ensure functionality?",
    "How can you be reached for questions?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
data = {};
writeFile(generateMarkdown(data));
