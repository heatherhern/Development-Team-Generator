const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const render = require('./lib/htmlRenderer');
const path = require('path');
const fs = require('fs');
var prompt = inquirer.createPromptModule();

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');


let managerQuestions = [{
    type: "input",
    message: "Welcome, Manager! What is your name?",
    name: "name"
},
{
    type: "input",
    message: "What is your employee ID number?",
    name: "id"
},
{
    type: "input",
    message: "What is your email?",
    name: "email"
},
{
    type: "input",
    message: "What is your office number?",
    name: "officeNumber"
}];

let moreEmployees = { type: "list", message: "What other employees do you have?", choices: ["Engineer", "Intern", new inquirer.Separator(), "I have no more employees"], name: "nextEmployee" };

let engineerQuestions = [{
    type: "input",
    message: "What is your Engineer's name?",
    name: "name"
},
{
    type: "input",
    message: "What is their employee ID number?",
    name: "id"
},
{
    type: "input",
    message: "What is their email?",
    name: "email"
},
{
    type: "input",
    message: "What is their Github username?",
    name: "github"
}];

let internQuestions = [{
    type: "input",
    message: "What is your Interns's name?",
    name: "name"
},
{
    type: "input",
    message: "What is their employee ID number?",
    name: "id"
},
{
    type: "input",
    message: "What is their email?",
    name: "email"
},
{
    type: "input",
    message: "What school do they attend?",
    name: "school"
}];

    const employees = [];
    getManager();

function getManager() {
    prompt(managerQuestions).then(response => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        employees.push(manager);
        console.log(employees);
        nextEmployee();
    })
};

function nextEmployee() {
    prompt(moreEmployees).then(response => {
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

function getEngineer() {
    prompt(engineerQuestions).then(response => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        employees.push(engineer);
        console.log(employees);
        nextEmployee();
    });
};

function getIntern() {
    prompt(internQuestions).then(response => {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        employees.push(intern);
        console.log(employees);
        nextEmployee();
    });
};

module.exports = employees;