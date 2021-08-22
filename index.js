// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const moment = require('moment');
const dateTime = moment();
console.log(dateTime.format('MMMM Do YYYY, h:mm:ss a'));
// TODO: Create an array of questions for user input
//const questions = [];
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (Required)',
        // Validate the properties to check if a valid value was provided by the user
        validate: (value)=>{ if(value){return true} else {return 'we need a value here to continue please!'}}     
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub Repository link to your project. (Required)',
        // Validate the properties to check if a valid value was provided by the user
        validate: (value)=>{ if(value){return true} else {return 'we need a value here to continue please!'}}
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide some information about your app: (Required)',
        // Validate the properties to check if a valid value was provided by the user
        validate: (value)=>{ if(value){return true} else {return 'we need a value here to continue please!'}}
      
     
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install this app',
        // Validate the properties to check if a valid value was provided by the user
        validate: (value)=>{ if(value){return true} else {return 'we need a value here to continue please!'}}
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Provide some information about your app:',
        // Validate the properties to check if a valid value was provided by the user
        validate: (value)=>{ if(value){return true} else {return 'we need a value here to continue please!'}}
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Provide some information about your app:',
        // Validate the properties to check if a valid value was provided by the user
        validate: (value)=>{ if(value){return true} else {return 'we need a value here to continue please!'}}
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What license did you use for this project? (Check one)',
        choices: ['The GPL License', 'MIT', 'GNU', 'N/A'],
        // Validate the properties to check if a valid value was provided by the user
        validate: (value)=>{ if(value){return true} else {return 'we need a value here to continue please!'}}
      },
      {
        type: 'input',
        name: 'features',
        message: 'Provide some information about your app features:',
        // Validate the properties to check if a valid value was provided by the user
        validate: (value)=>{ if(value){return true} else {return 'we need a value here to continue please!'}}
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Provide any contributing information for your app:',
        // Validate the properties to check if a valid value was provided by the user
        validate: (value)=>{ if(value){return true} else {return 'we need a value here to continue please!'}}
      },
      {
        type: 'input',
        name: 'author',
        message: 'Provide name of the author for your app:',
        // Validate the properties to check if a valid value was provided by the user
        validate: (value)=>{ if(value){return true} else {return 'we need a value here to continue please!'}}
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide some information about your app:',
        // Validate the properties to check if a valid value was provided by the user
        validate: (value)=>{ if(value){return true} else {return 'we need a value here to continue please!'}}
      },
    
    [

    ].then(({
        title,
        link,
        description,
        installation,
        usage,
        credits,
        license,
        features,
        contributing,
        author,
        tests
    })=>{
        // This is the Template Used
        const template = `# ${title}

        * [Title](#title)
        * [Link](#link)
        * [Description](#description)
        * [Installation](#installation)
        * [Usage](#usage)
        * [Credits](#credits)
        * [License](#license) 
        * [Features](#features)
        * [Contributing](#contributing)
        * [Author](#author)
        * [Tests](#tests) 
       
        ## Link
        ${link}
        ## Description
        ${description}
        ## Installation
        ${installation}
        ## Usage
        ${usage}
        ## Credits
        ${credits}
        ## License
        ${license}
        ## Features
        ${features}
        ## Contributing
        ${contributing}
        ## Credits
        ${credits}
        ## Author
        ${author}
        ## Tests
        ${tests}`
    

    
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
createNewFile(title,template);
}
);
// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
function createNewFile(fileName, data){

    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{ 
        if(err) {
            console.log(err)
        }
        console.log('README complete! Check out README.md to see the output!');
})
}
}