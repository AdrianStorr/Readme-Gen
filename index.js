const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generationMarkdown = require("./utils/generateMarkdown");
// array of questions for user
const questions = [
{
    type: "input",
      message: "What is the project title?",
      name: "Title"
    },
    {
      type: "input",
      message: "Describe your project?",
      name: "Description"
    },
    {
        type: "input",
        message: "Provide instruction for use?",
        name: "Usage"
    },
    {
        type: "input",
        message: "Provide instructions for installation?",
        name: "Installation"   
    },
    { 
       
        type: "list",
        message: "What is the License regulations?",
        name: "License", 
        choices: [
            "MIT",
            "Apache 2.0",
            "GVL GPL 3.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        message: "Contributors?",
        name: "Contribution"

    },
    {

        type: "input",
        message: "What are Test used for project?",
        name: "Test" 
    },
    {

        type: "input",
        message: "github username?",
        name: "Username"  
    },
    {

        type: "input",
        message: "Email?",
        name: "Email"  
    }
  ];



// function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers=> {
        writeToFile("readMe.md",generationMarkdown({...answers}))
    })

}

// function call to initialize program
init();
