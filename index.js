// Packages needed
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');

// Questions array
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
        name: 'TableOfContents',
        message: 'Table of Contents-(Press Enter)'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What dependencies did you install for this project?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What are the steps to take for this app to be used?'
    },
    {
        type: 'confirm',
        name: 'License',
        message: 'Does your project need a license?'
    },
    {
        type: 'input',
        name: 'LicenseType',
        message: 'Which license is needed for this project?'
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
        name: 'Github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?'
    }
];

// Writes generateMarkdown to README file
const writeFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        console.log(data),
            err ? console.log(err) : console.log("README.md successfully created!")
    })
}

// Initializes app
const init = () => {
    inquirer.prompt(questions)
        .then(function(data) {
            writeFile("README.md", generateMarkdown(data));
            console.log(data)
        })
}

init();