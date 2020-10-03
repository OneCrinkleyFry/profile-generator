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


// a function that takes a role
const inquiry = (type) => {

    // determines the index that the questions need to be accessed based on the role.
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

    // the prompts at the index determined by the role.
    inquirer
        .prompt(questions[typeIndex])
        .then(res => {
            //creates an object using the role to determine which kind
                //and pushes it to the team
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
        // calls function promptTeam
        })
        .then(promptTeam);
};

// a function that asks if there is another team member
const promptTeam = () => {
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'confirmTeamMember',
                message: 'Are there any other team Members?'
            },
            {
                //asks what Role they hold
                type: 'list',
                name: 'memberType',
                message: 'What role do they have?',
                choices: ['Manager', 'Engineer', 'Intern'],
                when: ({ confirmTeamMember }) => confirmTeamMember
            }
        ])
        .then(res => {
            // If there is not another team member
            if (!res.confirmTeamMember) {
                // writes the html file.
                console.log('Building team!');
                writer(team);
            // if there is
            } else {
                // Inquires about the chosen role
                console.log(`-----------------------
Adding a(n) ${res.memberType}!
-----------------------`);
                inquiry(res.memberType);
            }
        })
}

//initiases the program starting with the manager.
inquiry('Manager');