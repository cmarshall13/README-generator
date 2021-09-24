// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = license => {
    switch (license) {
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'GNU':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        case 'Apache':
            return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'Mozilla':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        case 'Boost':
            return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
        case 'Unilicense':
            return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
        default:
            return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
renderLicenseLink = license => {
    switch (license) {
        case 'MIT':
            return 'https://opensource.org/licenses/MIT';
        case 'GNU':
            return 'https://www.gnu.org/licenses/licenses.en.html';
        case 'Apache':
            return 'https://www.apache.org/licenses/LICENSE-2.0';
        case 'Mozilla':
            return 'https://www.mozilla.org/en-US/MPL/';
        case 'Boost':
            return 'https://www.boost.org/users/license.html';
        case 'Unilicense':
            return 'https://unlicense.org/';
        default:
            return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
renderLicenseSection = license => {
    return license !== 'None' ? `This application is covered under the [${license}](${renderLicenseLink(license)}) license.` : `No licensing.`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} ${renderLicenseBadge(data.license)}

<!-- screenshot here -->
<img src="" alt="">
## TABLE OF CONTENTS
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Contribution](#contribution)
    5. [Testing](#testing)
    6. [License](#license)
    7. [Questions](#questions)
## Description

${data.about}

## Installation

${data.install}

## Usage

${data.usage}

## Contribution
    
${data.contribute}

## Testing

${data.test}

## License

${renderLicenseSection(data.license)}

## Questions
You can find my GitHub profile [here](https://www.github.com/${data.github}).
Any questions please email [here] <${data.email}>!
`;
}



module.exports = generateMarkdown;