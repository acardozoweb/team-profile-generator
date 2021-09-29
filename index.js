const inquirer = require("inquirer");

// import classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// create main HTML
const generateHTML = require("./src/template");

// writefile
const writeFile = require("./src/writefile");
const generateCards = require("./src/template");

const employeeArray = [];

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter manager name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Manager name required:");
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter manager ID",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Manager ID required:");
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter manager email",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Manager email required:");
          }
        },
      },
      {
        type: "input",
        name: "office",
        message: "Enter manger office number",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Manager office number required:");
          }
        },
      },
      {
        type: "list",
        name: "addEmployee",
        message: "Would you like to add any other employees to your team?",
        choices: ["Engineer", "Intern", "Done"],
      },
    ])
    .then((managerData) => {
      const { name, id, email, officeNumber, addEmployee } = managerData;
      const manager = new Manager(name, id, email, officeNumber);

      employeeArray.push(manager);

      if (addEmployee === "Engineer") {
        return addEngineer();
      } else if (addEmployee === "Intern") {
        return addIntern();
      } else {
        return employeeArray;
      }
    });
};

const addEngineer = () => {
  console.log(`
/////////////////////////
///  Add an Engineer  ///
/////////////////////////
`);

  // if (!portfolioData.projects) {
  //     portfolioData.projects = [];
  // }
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Enter engineer name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Engineer name required:");
          }
        },
      },
      {
        type: "input",
        name: "engineerId",
        message: "Enter engineer ID",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Engineer ID required:");
          }
        },
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Enter engineer email",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Engineer email required:");
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter engineer GitHub username",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Engineer GitHub username required:");
          }
        },
      },
      {
        type: "list",
        name: "addEmployee",
        message: "Would you like to add any other employees to your team?",
        choices: ["Engineer", "Intern", "Done"],
      },
    ])
    .then((engineerData) => {
      const { name, id, email, github, addEmployee } = engineerData;
      const engineer = new Engineer(name, id, email, github);

      employeeArray.push(engineer);

      if (addEmployee === "Engineer") {
        return addEngineer();
      } else if (addEmployee === "Intern") {
        return addIntern;
      } else {
        return employeeArray;
      }
    });
};

const addIntern = () => {
  console.log(`
////////////////////////
///  Add an Intern   ///
////////////////////////
`);

  // if (!portfolioData.projects) {
  //     portfolioData.projects = [];
  // }
  return inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "Enter intern name",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Intern name required:");
        }
      },
    },
    {
      type: "input",
      name: "internId",
      message: "Enter intern ID",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Intern id required:");
        }
      },
    },
    {
      type: "input",
      name: "internEmail",
      message: "Enter intern email",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Intern email required:");
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "Enter intern school name",
      validate: (schoolInput) => {
        if (schoolInput) {
          return true;
        } else {
          console.log("Intern school required:");
        }
      },
    },
    {
      type: "list",
      name: "addEmployee",
      message: "What type of employee would you like to add to your team?",
      choices: ["Engineer", "Intern", "Done"],
    },
  ])
  .then(internData => {
      const {name, id, email, school, addEmployee} = internData;
      const intern = new Intern (name, id, email, school);

      employeeArray.push(intern);

      if (addEmployee === "Engineer") {
          return addEngineer();
      } else if (addEmployee === "Intern") {
          return addIntern();
      } else {
          return employeeArray;
      }
  })
};



addManager()
    .then(employeeArray => {
        return generateCards(employeeArray);
    })
    .then(data => {
        console.log("Team profile has been created! Check the index.html file.")
        return writeFile(data);
    })
    .catch(err => {
        console.log(err);
    });
