
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    // Basic markdown template for every generated README
    let markdown = `# ${data.title}\n${data.license.badge}\n## Description\n\n${data.description}\n\n## Links\n\n[Code repository](https://github.com/${data.github}/${data.repository})`;
    // Possible sections for inclusion in the generated README
    let installationSection = ``;
    let usageSection = ``;
    let licenseSection = ``;
    let contributingSection = ``;
    let testsSection = ``;
    let questionsSection = ``;
    // Checks if any of the section options were chosen
    if (data.installation || data.usage || data.license.text || data.contributing || data.tests || data.questions) {
        // Adds a table of contents if at least one of the sections was chosen
        markdown += `\n\n## Table of Contents`;
        // Generates an installation section
        if (data.installation) {
            markdown += `\n\n-[Installation](#installation)`;
            installationSection = `## Installation\n\n${data.installation}\n\n`;
        };
        // Generates a usage section
        if (data.usage) {
            markdown += `\n-[Usage](#usage)`;
            usageSection = `## Usage\n\n${data.usage}\n\n`;
        };
        // Generates a license section
        if (data.license.text) {
            markdown += `\n-[License](#license)`;
            licenseSection = `## License\n\n${data.license.text}\n\n`;
        };
        // Generates a contributing section
        if (data.contributing) {
            markdown += `\n-[Contributing](#contributing)`;
            contributingSection = `## Contributing\n\n${data.contributing}\n\n`;
        };
        // Generates a tests section
        if (data.tests) {
            markdown += `\n-[Tests](#tests)`;
            testsSection = `## Tests\n\n${data.tests}\n\n`;
        };
        // Generates a questions section
        if (data.questions) {
            markdown += `\n-[Questions](#questions)`;
            questionsSection = `## Questions\n\n${data.questions.email}\n${data.questions.contact}\n\n`;
        };
    }
    // Adds all sections into the markdown for the README
    markdown += installationSection + usageSection + licenseSection + contributingSection + testsSection + questionsSection;
    // Returns all of the generated markdown as one big string literal
    return markdown;
}

// Exports the function
module.exports = { generateMarkdown };
