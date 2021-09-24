// TODO: Include packages needed for this application
const fs = require('fs').promises;
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const emailValidator = require('email-validator');
//const emailValidator = require('email-validator');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your Project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'about',
            message: 'Please add a description of your application (required).',
            validate: aboutInput => {
                if (aboutInput) {
                    return true;
                } else {
                    console.log('Please enter your description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please provide the steps needed to install run-time dependencies.\n' + 
            'Please format any commands with ```command```:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions for how to use the app:',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please write your contribution standards:'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please write your testing information:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license:',
            choices: ['MIT', 'GNU', 'Apache', 'Mozilla', 'Boost', 'Unilicense', 'None']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username (required):',
            validate: gitHubInput => {
                if (!gitHubInput) {
                    console.log('You must enter your GitHub username.');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address (required):',
            validate: userEmail => {
                if (emailValidator.validate(userEmail)) {
                    return true;
                } else {
                    console.log('Please enter a valid email address!');
                    return false;
                }
            },
        },
]);
};

// TODO: Create a function to write README file
writeToFile = async (fileName, fileText) => {
    try{
        await fs.writeFile(fileName, fileText);
        console.log('File written successfully in the /dist directory!');
    } catch (err) {
        console.log(err);
    }
}

// TODO: Create a function to initialize app
init = () => {
    console.log('Welcome to your Professional README Generator!')


// Function call to initialize app

questions()
    .then(data => {
        let fileText = generateMarkdown(data);
        writeToFile('./dist/README.md', fileText);
    })
    .catch(err => {
        console.log(err);
    });
}
init();