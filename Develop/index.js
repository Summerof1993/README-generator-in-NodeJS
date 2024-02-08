// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Provide a short description explaining the what, why, and how of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        name: "installation",
    },
    {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "usage",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
    {
        type:"list",
        message: "What license would you like?",
        choices: [
            "MIT",
            "Apache",
            "GPL"
        ],
        name: "license",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data) , (err) =>
    err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) =>
        writeToFile("sampleREADME.md", data)
    )
};

// Function call to initialize app
init();
