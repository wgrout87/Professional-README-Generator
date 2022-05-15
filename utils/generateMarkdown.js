
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    let markdown = `# ${data.title}\n${data.license.badge}\n## Description\n\n${data.description}\n\n## Links\n\n[Code repository](https://github.com/${data.github}/${data.repository})`;
    if (data.installation || data.usage || data.license.text || data.contributing || data.tests || data.questions) {
        markdown += `\n\n## Table of Contents`;
        if (data.installation) {
            markdown += `\n\n-[Installation](#installation)`
        };
        if (data.usage) {
            markdown += `\n-[Usage](#usage)`
        };
        if (data.license.text) {
            markdown += `\n-[License](#license)`
        };
        if (data.contributing) {
            markdown += `\n-[Contributing](#contributing)`
        };
        if (data.tests) {
            markdown += `\n-[Tests](#tests)`
        };
        if (data.questions) {
            markdown += `\n-[Questions](#questions)`
        };
    }
    return markdown;
    // return `# ${data.title}
    // ${data.license.badge}

    // ## Description

    // ${data.description}

    // ## Links

    // [Code repository](https://github.com/${data.github}/${data.repository})

    // ## Table of Contents

    // -[Installation](#installation)  
    // -[Usage](#usage)
    // -[License](#license)
    // -[Contributing](#contributing)
    // -[Tests](#tests)
    // -[Questions](#questions)

    // ## Installation

    // ${data.installation}

    // ## Usage

    // ${data.usage}

    // ## License

    // ${data.license.text}

    // ## Contributing

    // ${data.contributing}

    // ## Tests

    // ${data.tests}

    // ## Questions

    // ${data.questions.email}
    // ${data.questions.contact}
    // `;
}

module.exports = { generateMarkdown };
