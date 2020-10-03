const fs = require('fs');

let team = [];
const writePage = teamMembers => {
    team = teamMembers;
    fs.writeFile('./dist/index.html', basicPage(), err => {
        if (err) throw err;
        console.log('File Created!');
    })
}

const basicPage = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css"/>
</head>
<body>
    <header class="h-auto border-bottom-1 "><h1 class="font-weight-bold text-light text-center py-4 ">My Team</h1></header>
    <main>
        <div class="card-box d-flex justify-content-center flex-wrap">
            ${createCards()}
        </div>
    </main>    
</body>
</html>`;
};

const createCards = () => {
    let cards = ``;
    for (let i = 0; i < team.length; i++) {
        cards += cardTemplate(team[i]) + `
            `;
    }
    return cards;
}

const cardTemplate = (employee) => {
    // console.log(employee);
    const { name, id, email, role, school, officeNumber, github } = employee;
    return `<div class="card mb-4 column">
                <div class="card-header text-light">
                    <h2 class='text-capitalize'>${name}</h2>
                    <h3 class='${role}'>${role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">Employee id: ${id}</li>
                        <li class="list-group-item">Email: <a href='mailto:${email}'>${email}</a></li>
                        ${classListItem(role, school || officeNumber || github)}
                    </ul>
                </div>
            </div>`
}

const classListItem = (role, trait) => {
    if (role === 'Manager') {
        return `<li class="list-group-item">Office Number: ${trait}</li>`;
    } else if (role === 'Engineer') {
        return `<li class="list-group-item">Github: <a href='https://github.com/${trait}/'>${trait}</a></li>`
    } else if (role === 'Intern') {
        return `<li class="list-group-item">School: ${trait}</li>`
    }
}

module.exports = writePage;