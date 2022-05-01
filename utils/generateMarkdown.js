// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {
    case '':
      return '';
      break;
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
      
      `;
      break;
    case 'GPL 3.0':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
      
      `;
      break;
    case 'BSL 1.0':
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
      
      `;
      break;
    case 'APACHE 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
      
      `
      break;
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//choices: ['MIT', 'GPL 3.0', 'BSD 3', 'APACHE 2.0', 'None']
function renderLicenseLink(license) {

  switch (license) {
    case '':
      return '';
      break;
    case 'MIT':
      return `https://opensource.org/licenses/MIT`;
      break;
    case 'GPL 3.0':
      return `https://www.gnu.org/licenses/gpl-3.0`;
      break;
    case 'BSL 1.0':
      return `https://www.boost.org/LICENSE_1_0.txt`;
      break;
    case 'APACHE 2.0':
      return `https://opensource.org/licenses/Apache-2.0`;
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  const section = (badge + link);
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { license } = data;
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribution](#how-to-contribute)
  - [Questions](#questions)

  ## Installation
  To install dependencies run "${data.install}"


  To run tests run "${data.test}"

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(license)}

  ## How To Contribute
  ${data.contribute}

  ## Questions
  Project created by [${data.github}](https://github.com/${data.github})

  
  If you have any questions contact the developer at ${data.email}
`;
}

module.exports = generateMarkdown;

