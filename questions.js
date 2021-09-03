module.exports =     [
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title? (Required)',
      // Validate the properties to check if a valid value was provided by the user
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }
      }     
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub Repository link to your project. (Required)',
      // Validate the properties to check if a valid value was provided by the user
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your github link!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide some information about your app: (Required)',
      // Validate the properties to check if a valid value was provided by the user
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter some information an=bout your app!');
          return false;
        }
      }
    
   
  },
  {
      type: 'input',
      name: 'installation',
      message: 'How to install this app',
      // Validate the properties to check if a valid value was provided by the user
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Provide some information about how the app is used:',
     // Validate the properties to check if a valid value was provided by the user
     validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your name!');
        return false;
      }
    }
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Provide credits information if applicable:',
      // Validate the properties to check if a valid value was provided by the user
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      
      message: 'Please select a license? (Check one)',
      choices: ['MIT', 'Apache 2.0', 'GPLv3', 'N/A'],
      // Validate the properties to check if a valid value was provided by the user
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please pick a license!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'features',
      message: 'Provide some information about your app features:',
      // Validate the properties to check if a valid value was provided by the user
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter information about the app!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide any contributing information for your app:',
      // Validate the properties to check if a valid value was provided by the user
      // Validate the properties to check if a valid value was provided by the user
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter contribution info!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'author',
      message: 'Provide name of the author for your app:',
      // Validate the properties to check if a valid value was provided by the user
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test information for your app:',
      // Validate the properties to check if a valid value was provided by the user
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your test info!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'Git:',
      message: 'Please enter your github username: (Required)',
      // Validate the properties to check if a valid value was provided by the user
      // Validate the properties to check if a valid value was provided by the user
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your github username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'E-mail:',
      message: 'Please enter your E-mail: (Required)',
      // Validate the properties to check if a valid value was provided by the user
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your email!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to generate another README.md? (Required)',
      default: false,
      // Validate the properties to check if a valid value was provided by the user
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the name of another project!');
          return false;
        }
      }
      
    },
  ]