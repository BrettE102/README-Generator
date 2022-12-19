// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./util/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title for this project?'
    }, {
        type: 'input',
        name: 'description',
        message: 'What is the project about? Give a breif description'
    }, {
        type: 'list', 
        name: 'license',
        message: 'What license does your project use?',
        choices: ['None' , 'MIT' , 'GPL v3.0', 'Creative Commons Licenses']
    },  {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this project?'
    }, {
        type: 'input',
        name: 'installation',
        message: 'What instructions are needed for installation?'
    }, {
        type: 'input',
        name: 'test',
        message: 'What instructions are needed for testing this project?'
    }, {
        type: 'input',
        name: 'contributers',
        message: 'What is required to contribute to this project?'
    }, {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }, {
        type: 'input',
        name: 'github',
        message: 'What is your github?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        if (err) {
            return console.log(err)
        } else {
            console.log(`${data}`)
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
