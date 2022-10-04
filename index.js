// TODO: Include packages needed for this application
const inquirer = require('./node_modules/inquirer')
const fs = require('./node_modules/fs')
const generateMarkdown = require('Develop/utils/generateMarkdown.js')

console.log('hello world')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title for this project?'
    }, {
        type: 'input',
        name: 'Description',
        message: 'What is the project about? Give a breif description'
    }, {
        type: 'list', 
        name: 'License',
        message: 'What license does your project use?',
        choices: ['None' , 'MIT' , 'Apache 2.0' , 'GPL v3.0']
    }, {
        type: 'input',
        name: 'Table of Contents.',
        message: 'Table of Contents'
    },    {
        type: 'input',
        name: 'Title',
        message: 'What is the title for this project?'
    },    {
        type: 'input',
        name: 'Title',
        message: 'What is the title for this project?'
    },    {
        type: 'input',
        name: 'Title',
        message: 'What is the title for this project?'
    },    {
        type: 'input',
        name: 'Title',
        message: 'What is the title for this project?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
