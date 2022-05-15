// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.license.badge}

  ## Description

  ${data.description}

  ## Links

  [Code repository](https://github.com/${data.github}/${data.repository})

  ## Table of Contents

  -[Installation](#installation)  
  -[Usage](#usage)
  -[License](#license)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license.text}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  ${data.questions.email}
  ${data.questions.contact}
  `;
}

module.exports = { generateMarkdown };
