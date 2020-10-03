const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const writer = require('./src/page-template');

const team = [];

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
                console.log(team);
                writer(team);
            } else {
                inquiry(res.memberType);
            }
        })
}
const tempData = [];
const man1 = new Manager('George', '1234','asdfasddfasdff','65');
tempData.push(man1);
const eng1 = new Engineer('Henry', '143209','lasdfasfsfd','bigbooty69');
tempData.push(eng1);
const int1 = new Intern('scott', '1234123412344','asdfafsdfsda','asfdasdfsadff');
tempData.push(int1);
const eng2 = new Engineer('bob', '432890','asdfadsf','sigma90');
tempData.push(eng2);

writer(tempData);

// inquiry('Manager');