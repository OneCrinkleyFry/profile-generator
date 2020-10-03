const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let team = [];

const startInquiry = () => {
    inquirer
        .prompt([{
            type: "input",
            name: 'name',
            message: 'Who is the team manager?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee id? (enter a number)'
        }
    ])
        .then(res => {
            console.log(res);
        })
};

startInquiry();