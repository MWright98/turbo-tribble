// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = ('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?"
    },
    {
        type: 'input',
        name 'description',
        message: "Please enter a short description of your project"
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: ['MIT', 'GPL 3.0', 'BSD 3', 'APACHE 2.0', 'None']
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install program dependencies?',
        defualt: 'npm i'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be entered to run tests?',
        deafualt: 'npm test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What information is required to use this repo?'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What should the user know to contribute to this repo?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
