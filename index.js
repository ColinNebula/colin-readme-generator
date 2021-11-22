// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const badgeIcon = require("./badges.js");
const questions = require("./questions");
const{renderLicenseBadge, renderLicenseLink} = require('./badges.js');
const moment = require('moment');
const dateTime = moment();
console.log(dateTime.format('MMMM Do YYYY, h:mm:ss a'));




// TODO: Create an array of questions for user input
//const questions = [];
const promptUser = () => { 
    return inquirer.prompt( 
      questions

).then(({
title,
description,
installation,
usage,
credits,
license,
features,
contributing,
badges,
author,
tests,
link,
email
    })=>{
// This is the Template Used
console.log(license);
const template = `# ${title}

# Table of Contents       
* [Title](#title)
* [Subtitle](#subtitle)
* [Github](#link)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license) 
* [Badges](#badges)
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
${renderLicenseBadge(license)}

${renderLicenseLink(license)}


## Features
${features}

## Contributing
${contributing}

## Badges
${badges}

## Credits
${credits}

## Author
${author}

## Tests
${tests}

# Questions    
* Github : [${link}](https://github.com/${link}"/)
* E-mail :[${email}](https://email.com/${email}`;
    
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

    fs.writeFile(`./${fileName.toUpperCase().split(' ').join('')}.md`,data,(err)=>{ 
        if(err) {
            console.log(err)
        }
        console.log('README complete! Check out README.md to see the output!');
})
}
}
promptUser()