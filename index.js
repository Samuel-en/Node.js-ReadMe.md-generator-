const fs = require("fs");
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const generateMarkdown = ('./utils/generateMarkdown')


// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the project title?"
    },
    {
        type: "input",
        name: "title",
        message: "What are steps to install the project?"
    },
    {
        type: "input",
        name: "title",
        message: "what is the project title?"
    },
    {
        type: "input",
        name: "title",
        message: "Provide instructions for the usage of this project"
    },
    {
        type: "input",
        name: "title",
        message: "who are the collaborators in this project?"
    },
    {
        type: "input",
        name: "title",
        message: "Select a License from the following options?",
        Choices: [
            "MIT",
            "ISC",
            "GPL"
        ]
    },
];



// function to write README file
function writeToFile(README, data){
        fs.writeFileSync(path.join(process.cwd(), README),data);
    }


    // console.log("New README file created with success!");



// function to initialize program
function init() {
    inquirer.prompt(questions)
            .then(answers=>{
    })

}

// function call to initialize program
init();