// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const { licenses } = require("./utils/licenses.js");

const { writeFile } = require("./utils/generate-file.js");

const { generateMarkdown } = require("./utils/generateMarkdown.js");



// TODO: Create an object whose properties are questions for user input
const questions = {
    github: "What is your GitHub username? (Required)",
    githubValidate: "Please enter your GitHub username!",
    repository: "What is the repository name on GitHub? (Required)",
    repositoryValidate: "Please enter a repository name!",
    title: "What is the title of your project? (Required)",
    titleValidate: "Please enter a project title!",
    description: "Please enter a description of your project. (Required)",
    descriptionValidate: "Please enter a description for the project!",
    contents: "Please select the sections you would like to include in your README.",
    installation: "What are the steps required to install your project.",
    usage: "Please provide instructions and examples for use.",
    license: "Which license would you like to use?",
    contributing: "How can others contribute to this project?",
    tests: "What tests can be run to ensure functionality?",
    email: "What is your email address?",
    contact: "How can you be reached for questions?"
};



// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: questions.github,
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log(questions.githubValidate);
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "repository",
            message: questions.repository,
            validate: repositoryInput => {
                if (repositoryInput) {
                    return true;
                } else {
                    console.log(questions.repositoryValidate);
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "title",
            message: questions.title,
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log(questions.titleValidate);
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: questions.description,
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log(questions.descriptionValidate);
                    return false;
                }
            }
        },
        {
            type: "checkbox",
            name: "contents",
            message: questions.contents,
            choices: ["Installation", "Usage", "License", "Contributing", "Tests", "Questions"]
        }
    ])
};

const installationPrompt = readmeData => {
    if (readmeData.contents.includes("Installation")) {
        return inquirer.prompt([
            {
                type: "input",
                name: "installation",
                message: questions.installation
            }
        ])
        .then(installationData => {
            readmeData.installation = installationData.installation;
            return readmeData;
        })
    }
    return readmeData;
};

const usagePrompt = readmeData => {
    if (readmeData.contents.includes("Usage")) {
        return inquirer.prompt([
            {
                type: "input",
                name: "usage",
                message: questions.usage
            }
        ])
        .then(usageData => {
            readmeData.usage = usageData.usage;
            return readmeData;
        })
    }
    return readmeData;
};

const licensePrompt = readmeData => {
    if (readmeData.contents.includes("License")) {
        return inquirer.prompt([
            {
                type: "list",
                name: "license",
                message: questions.license,
                choices: Object.keys(licenses)
            }
        ])
        .then(licenseData => {
            readmeData.license = licenses[licenseData.license];
            return readmeData;
        })
    }
    return readmeData;
};

const contributingPrompt = readmeData => {
    if (readmeData.contents.includes("Contributing")) {
        return inquirer.prompt([
            {
                type: "input",
                name: "contributing",
                message: questions.contributing
            }
        ])
        .then(contributingData => {
            readmeData.contributing = contributingData.contributing;
            return readmeData;
        })
    }
    return readmeData;
};

const testsPrompt = readmeData => {
    if (readmeData.contents.includes("Tests")) {
        return inquirer.prompt([
            {
                type: "input",
                name: "tests",
                message: questions.tests
            }
        ])
        .then(testsData => {
            readmeData.tests = testsData.tests;
            return readmeData;
        })
    }
    return readmeData;
};

const questionsPrompt = readmeData => {
    if (readmeData.contents.includes("Questions")) {
        return inquirer.prompt([
            {
                type: "input",
                name: "email",
                message: questions.email
            },
            {
                type: "input",
                name: "contact",
                message: questions.contact
            }
        ])
        .then(questionsData => {
            readmeData.questions = questionsData;
            return readmeData;
        })
    }
    return readmeData;
};

// Function call to initialize app
init()
    .then(installationPrompt)
    .then(usagePrompt)
    .then(licensePrompt)
    .then(contributingPrompt)
    .then(testsPrompt)
    .then(questionsPrompt)
    .then(data => console.log(data));
