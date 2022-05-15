
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    let markdown = `# ${data.title}\n${data.license.badge}\n## Description\n\n${data.description}\n\n## Links\n\n[Code repository](https://github.com/${data.github}/${data.repository})`;
    let installationSection = ``;
    let usageSection = ``;
    let licenseSection = ``;
    let contributingSection = ``;
    let testsSection = ``;
    let questionsSection = ``;
    if (data.installation || data.usage || data.license.text || data.contributing || data.tests || data.questions) {
        markdown += `\n\n## Table of Contents`;
        if (data.installation) {
            markdown += `\n\n-[Installation](#installation)`;
            installationSection = `## Installation\n\n${data.installation}\n\n`;
        };
        if (data.usage) {
            markdown += `\n-[Usage](#usage)`;
            usageSection = `## Usage\n\n${data.usage}\n\n`;
        };
        if (data.license.text) {
            markdown += `\n-[License](#license)`;
            licenseSection = `## License\n\n${data.license.text}\n\n`;
        };
        if (data.contributing) {
            markdown += `\n-[Contributing](#contributing)`;
            contributingSection = `## Contributing\n\n${data.contributing}\n\n`;
        };
        if (data.tests) {
            markdown += `\n-[Tests](#tests)`;
            testsSection = `## Tests\n\n${data.tests}\n\n`;
        };
        if (data.questions) {
            markdown += `\n-[Questions](#questions)`;
            questionsSection = `## Questions\n\n${data.questions.email}\n${data.questions.contact}\n\n`;
        };
    }
    markdown += installationSection + usageSection + licenseSection + contributingSection + testsSection + questionsSection;
    return markdown;
}

module.exports = { generateMarkdown };
