const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email);
        this.role = 'Manager';
        this.officeNumber = number;
    }

    getNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;