// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "list",
        message: "License?",
        name: "license",
        choices: ["Apache 2.0", "Boost", "IBM", "MIT", "WTFPL"],
    },
    {
        type: "input",
        message: "Description of project?",
        name: "description",
    },
    {
        type: "input",
        message: "Do you have any installation instructions?",
        name: "installation",
    },
    {
        type: "input",
        message: "Usage?",
        name: "usage",
    },
    {
        type: "input",
        message: "Any contributors?",
        name: "contributing",
    },
    {
        type: "input",
        message: "Tests run?",
        name: "tests",
    }
    
])