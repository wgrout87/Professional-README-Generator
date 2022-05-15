// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const { licenses } = require("./utils/licenses.js");

const { writeFile } = require("./utils/generate-file.js");

const { generateMarkdown } = require("./utils/generateMarkdown.js");



// TODO: Create an object whose properties are questions for user input
const questions = {
    name: "What is your name? (Required)",
    nameValidate: "Please enter your name!",
    github: "What is your GitHub username? (Required)",
    githubValidate: "Please enter your GitHub username!",
    repository: "What is the repository name on GitHub? (Required)",
    repositoryValidate: "Please enter a repository name!",
    title: "What is the title of your project? (Required)",
    titleValidate: "Please enter a project title!",
    pages: "Is the application deployed to GitHub pages?",
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



// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
            // Prompt to retrieve the user's name
            type: "input",
            name: "name",
            message: questions.name,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(questions.nameValidate);
                    return false;
                }
            }
        },
        {
            // Prompt to retrieve the github user name
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
            // Prompt to retrieve the github repository name
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
            // Prompt to retrieve the project title
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
            // Prompt to determine if a link to a deployed application should be included
            type: "confirm",
            name: "pages",
            message: questions.pages,
            default: false
        },
        {
            // Prompt to retrieve the project description
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
            // Prompt to determine which sections to include in the generated README
            type: "checkbox",
            name: "contents",
            message: questions.contents,
            choices: ["Installation", "Usage", "License", "Contributing", "Tests", "Questions"]
        }
    ])
};

// Prompt to be displayed if the user chose to add an installation section
const installationPrompt = readmeData => {
    if (readmeData.contents.includes("Installation")) {
        return inquirer.prompt([
            {
                type: "input",
                name: "installation",
                message: questions.installation
            }
        ])
            // Adds the input from this prompt to the data from previous prompts and returns it all for further use
            .then(installationData => {
                readmeData.installation = installationData.installation;
                return readmeData;
            })
    }
    return readmeData;
};

// Prompt to be displayed if the user chose to add a usage section
const usagePrompt = readmeData => {
    if (readmeData.contents.includes("Usage")) {
        return inquirer.prompt([
            {
                type: "input",
                name: "usage",
                message: questions.usage
            }
        ])
            // Adds the input from this prompt to the data from previous prompts and returns it all for further use
            .then(usageData => {
                readmeData.usage = usageData.usage;
                return readmeData;
            })
    }
    return readmeData;
};

// Prompt to be displayed if the user chose to add a license section
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
            // Adds the input from this prompt to the data from previous prompts and returns it all for further use
            .then(licenseData => {
                readmeData.license = licenses[licenseData.license];
                return readmeData;
            })
    }
    // If license wasn't chosen, it is given empty strings as values to avoid breaking the generateMarkdown code
    else {
        readmeData.license = { text: "", badge: "" }
    };
    return readmeData;
};

// Prompt to be displayed if the user chose to add a contributing section
const contributingPrompt = readmeData => {
    if (readmeData.contents.includes("Contributing")) {
        return inquirer.prompt([
            {
                type: "input",
                name: "contributing",
                message: questions.contributing
            }
        ])
            // Adds the input from this prompt to the data from previous prompts and returns it all for further use
            .then(contributingData => {
                readmeData.contributing = contributingData.contributing;
                return readmeData;
            })
    }
    return readmeData;
};

// Prompt to be displayed if the user chose to add a tests section
const testsPrompt = readmeData => {
    if (readmeData.contents.includes("Tests")) {
        return inquirer.prompt([
            {
                type: "input",
                name: "tests",
                message: questions.tests
            }
        ])
            // Adds the input from this prompt to the data from previous prompts and returns it all for further use
            .then(testsData => {
                readmeData.tests = testsData.tests;
                return readmeData;
            })
    }
    return readmeData;
};

// Prompt to be displayed if the user chose to add a questions section
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
            // Adds the input from this prompt to the data from previous prompts and returns it all for further use
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
    .then(data => generateMarkdown(data))
    .then(md => writeFile(md))
    .then(response => {
        console.log(response.message);
    })
    .catch(err => {
        console.log(err);
    });
