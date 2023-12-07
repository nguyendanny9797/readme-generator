// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require ("util");
const path = require ("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of the project?",
    },
    {
        type: "input",
        name: "projectDescription",
        message: "What is the purpose of this project? List any contributors to this project using GitHub usernames.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please enter the license(s) used, if any, for this project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation procedure for this project.",
    },
    {
        type: "input",
        name: "usageInfo",
        message: "What programming languages were used to develop this project?",
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter a valid email address.",
    },
    {
        type: "input",
        name: "test",
        message: "Please provide a walkthrough of any tests for this project.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), filename), data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();