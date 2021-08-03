// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
    return `
# ${data.Title}
# Description
https://github.com/${data.Github}/${data.Title}
${data.Description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
The following necessary dependencies must be installed to run the application properly: ${data.Installation}
# Usage
In order to use this app, ${data.Usage}
# License
This project is licensed under the ${data.License} license. 
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
# Contributions
​Contributors: ${data.Contributions}
# Tests
The following is needed to run tests: ${data.Tests}
# Questions
If you have any questions about the repository contact ${data.Contributions} directly at : ${data.Email}.
`;
}

module.exports = generateMarkdown;