// License badge
const renderLicenseBadge = (data) => {
    if (data.License === false) {
        return '';
    } else {
        return `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`;
    }
}

// License table of contents
const renderLicenseTOC = (data) => {
    if (data.License === false) {
        return '';
    } else {
        return '* [License](#license)';
    }

}

// License section
const renderLicenseSection = (data) => {
    if (data.License === false) {
        return '';
    } else {
        return `# License
The ${data.LicenseType} license. 
${renderLicenseBadge(data)}
        
Copyright (c) 2021 ${data.Contributions}.
        
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO 
THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
    }
}

// Generates README.md file
const generateMarkdown = (data) => {
    return `# ${data.Title}
https://github.com/${data.Github}/${data.Title}
# Description
${data.Description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseTOC(data)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
The following necessary dependencies must be installed to run the application properly: ${data.Installation}
# Usage
In order to use this app, ${data.Usage}
${renderLicenseSection(data)}
# Contributions
​Contributors: ${data.Contributions}
# Tests
The following is needed to run tests: ${data.Tests}
# Questions
If you have any questions about the repository contact ${data.Contributions} directly at : ${data.Email}.
`;
}

// Module exports
module.exports = { generateMarkdown, renderLicenseSection };