// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    // Basic markdown template for every generated README
    let markdown = `# ${data.title}\n${data.license.badge}\n## Description\n\n${data.description}\n\n## Links\n\n[Code repository](https://github.com/${data.github}/${data.repository})`;
    // Possible sections for inclusion in the generated README
    if (data.pages) {
        let githubLink = `\n[Deployed website](https://${data.github}.github.io/${data.repository}/)`;
        markdown += githubLink;
    }
    let installationSection = ``;
    let usageSection = ``;
    let licenseSection = ``;
    let year = new Date;
    let contributingSection = ``;
    let testsSection = ``;
    let questionsSection = ``;
    // Checks if any of the section options were chosen
    if (data.installation || data.usage || data.license.text || data.contributing || data.tests || data.questions) {
        // Adds a table of contents if at least one of the sections was chosen
        markdown += `\n\n## Table of Contents\n`;
        // Generates an installation section
        if (data.installation) {
            markdown += `\n- [Installation](#installation)`;
            installationSection = `\n\n## Installation\n\n${data.installation}`;
        };
        // Generates a usage section
        if (data.usage) {
            markdown += `\n- [Usage](#usage)`;
            usageSection = `\n\n## Usage\n\n${data.usage}`;
        };
        // Generates a license section
        if (data.license.text) {
            markdown += `\n- [License](#license)`;
            licenseSection = `\n\n## License\n\nCopyright ${year.getFullYear()} ${data.name}\n\n${data.license.text}`;
        };
        // Generates a contributing section
        if (data.contributing) {
            markdown += `\n- [Contributing](#contributing)`;
            contributingSection = `\n\n## Contributing\n\n${data.contributing}`;
        };
        // Generates a tests section
        if (data.tests) {
            markdown += `\n- [Tests](#tests)`;
            testsSection = `\n\n## Tests\n\n${data.tests}`;
        };
        // Generates a questions section
        if (data.questions) {
            markdown += `\n- [Questions](#questions)`;
            questionsSection = `\n\n## Questions\n\nMy GitHub Profile: [https://github.com/${data.github}](https://github.com/${data.github})\n\n${data.questions.email}\n\n${data.questions.contact}`;
        };
    }
    // Adds all sections into the markdown for the README
    markdown += installationSection + usageSection + licenseSection + contributingSection + testsSection + questionsSection;
    // Returns all of the generated markdown as one big string literal
    return markdown;
}

// Exports the function
module.exports = { generateMarkdown };
