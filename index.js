// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'Title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Give a detailed description of your project'
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'Table of Contents'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What dependencies did you install for this project?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How is your project used?'
    },
    {
        type: 'input',
        name: 'License',
        message: 'What kind of license does your project need?'
    },
    {
        type: 'input',
        name: 'Contributions',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'How did you test your app?'
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'What is your contact info for inquiries'
    },
    {
        type: 'input',
        name: 'Github',
        message: 'what is your GitHub username?'
    },
    {
        type: 'input',
        name: 'Email',
        message: 'what is your email address?'
    }
];

// TODO: Create a function to write README file
const writeFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName),
            console.log(data),
            err ? console.log(err) : console.log("README.md successfully created!")
    })
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
        .then(function(data) {
            writeFile("README.md", generateMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();