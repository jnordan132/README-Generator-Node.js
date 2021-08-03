// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a summary of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What dependencies did you install for this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your project used for?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What kind of license does your porject need?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How did you test your app?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'what is your GitHub?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'what is your email?'
    }
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();