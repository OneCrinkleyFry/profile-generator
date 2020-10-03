const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const writer = require('./src/page-template');

//the team being created
const team = [];

// the questions being asked.
const questions = [
    [
        {
            type: "input",
            name: 'name',
            message: 'Who is the team manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter a name.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee id? (enter a number)',
            validate: idInput => {
                const temp = parseInt(idInput);
                if (temp) {
                    return true;
                } else {
                    console.log(`Please enter an id number.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email address.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(`Please enter an email.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number.",
            validate: officeInput => {
                const temp = parseInt(officeInput);
                if (temp) {
                    return true;
                } else {
                    console.log(`Please enter an office number.`);
                    return false;
                }
            }
        }
    ],
    [
        {
            type: "input",
            name: 'name',
            message: 'Who is the Engineer?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter a name.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee id? (enter a number)',
            validate: idInput => {
                const temp = parseInt(idInput);
                if (temp) {
                    return true;
                } else {
                    console.log(`Please enter an id number.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the engineer's email address.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(`Please enter an email.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's github username.",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log(`Please enter a github username.`);
                    return false;
                }
            }
        }
    ],
    [
        {
            type: "input",
            name: 'name',
            message: 'Who is the Intern?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter a name.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee id? (enter a number)',
            validate: idInput => {
                const temp = parseInt(idInput);
                if (temp) {
                    return true;
                } else {
                    console.log(`Please enter an id number.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the intern's email address.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(`Please enter an email.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Where do they attend school?",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log(`Please enter a school name.`);
                    return false;
                }
            }
        }
    ]
];


// a function that takes a role, and 
const inquiry = (type) => {
    let typeIndex = 0;
    switch (type) {
        case 'Manager':
            typeIndex = 0;
            break;
        case 'Engineer':
            typeIndex = 1;
            break;
        case 'Intern':
            typeIndex = 2;
            break;
    }
    inquirer
        .prompt(questions[typeIndex])
        .then(res => {
            if (typeIndex === 0) {
                const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
                team.push(manager);
            } else if (typeIndex === 1) {
                const engineer = new Engineer(res.name, res.id, res.email, res.github);
                team.push(engineer);
            } else if (typeIndex === 2) {
                const intern = new Intern(res.name, res.id, res.email, res.school);
                team.push(intern);
            }
        })
        .then(promptTeam);
};

const promptTeam = () => {
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'confirmTeamMember',
                message: 'Are there any other team Members?'
            },
            {
                type: 'list',
                name: 'memberType',
                message: 'What role do they have?',
                choices: ['Manager', 'Engineer', 'Intern'],
                when: ({ confirmTeamMember }) => confirmTeamMember
            }
        ])
        .then(res => {
            if (!res.confirmTeamMember) {
                console.log('Building team!');
                writer(team);
            } else {
                console.log(`-----------------------
Adding a(n) ${res.memberType}!
-----------------------`);
                inquiry(res.memberType);
            }
        })
}

inquiry('Manager');