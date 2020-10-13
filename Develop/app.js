const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


    const questions = [
        {
            type: 'confirm',
            message: 'Would you like to add a new employee?',
            name: 'newEmployee',
        },
        {
            type: 'list',
            message: 'Which employee do you want to create?',
            name: 'employeeType',
            choices: [
                { name: 'Manager', checked: false },
                { name: 'Engineer', checked: false },
                { name: 'Intern', checked: false },
                { name: 'Unicorn', checked: false }
            ]
        },
        {
            type: 'confirm',
            message: 'Would you like to create another employee?',
            name: 'anotherEmployee',
        }
    ];

    const engineerQuestions = [
        {
            type: 'input',
            message: 'Please enter your name.',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Please enter your work ID.',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Please enter your work email.',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Please enter your work GitHub.',
            name: 'github'
        }
    ];

    const managerQuestions = [
        {
            type: 'input',
            message: 'Please enter your name.',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Please enter your work ID.',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Please enter your work email.',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Please enter your manager office number.',
            name: 'office'
        }
    ];

    const internQuestions = [
        {
            type: 'input',
            message: 'Please enter your name.',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Please enter your work ID.',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Please enter your email.',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Please enter the school you are attending.',
            name: 'school'
        }
    ];

    const unicornQuestions = [
        {
            type: 'input',
            message: 'Please enter your name.',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Please enter your work ID.',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Please enter your email.',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What color unicorn are you?',
            name: 'color'
        }
    ];

askQuestions();

let employees = [];

function askQuestions() {
    prompt(questions).then(response => {
        if (newEmployee === true) {
            const { employeeType } = type;
            if (employeeType === 'Manager') {
                const managerObject = await inquirer.prompt(managerQuestions);
                const { name, id, email, office } = managerObject;
                const newManager = new Manager(name, id, email, office);
                employees.push(newManager);
                console.log(employees);
            }
            else if (employeeType === 'Engineer') {
                const engineerObject = await inquirer.prompt(engineerQuestions);
                const { name, id, email, github } = engineerObject;
                const newEngineer = new Engineer(name, id, email, github);
                employees.push(newEngineer);
                console.log(employees);
            }
            else if (employeeType === 'Intern') {
                const internObject = await inquirer.prompt(internQuestions);
                const { name, id, email, school } = internObject;
                const newIntern = new Intern(name, id, email, school);
                employees.push(newIntern);
                console.log(employees);
            }
            else if (employeeType === 'Unicorn') {
                const unicornObject = await inquirer.prompt(unicornQuestions);
                const { name, id, email, color } = unicornObject;
                const newUnicorn = new Unicorn(name, id, email, unicorn);
                employees.push(newUnicorn);
                console.log(employees);




prompt(questions).then(response => {
    if (response.)
    if (response.nextEmployee === "Engineer") {
        getEngineer();
    } else if (response.nextEmployee === "Intern") {
        getIntern();
    } else {
        html = render(employees);
        fs.appendFile("./output/team.html", html, (err) => {
            if (err) throw err;
            console.log("Your team page was successfully generated!")
        })
    }
});
};




// engineer, manager, intern, unicorn

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```