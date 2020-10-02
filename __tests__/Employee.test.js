const Employee = require('../lib/Employee');


test('checks that the employee class is initialized', () => {
    const employee = new Employee('dave', 123, 'j@j.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Checks the getName method to make sure it returns the name', () => {
    const employee = new Employee('dave', 123, 'j@j.com');

    expect(employee.getName()).toBe('dave');
});

test('checks if the id is returned.', () => {
    const employee = new Employee('dave', 123, 'j@j.com');

    expect(employee.getId()).toBe(123);
});

test('checks if the email is returned.', () => {
    const employee = new Employee('dave', 123, 'j@j.com');

    expect(employee.getEmail()).toBe('j@j.com');
});

test('checks the role of the employee', () => {
    const employee = new Employee('dave', 123, 'j@j.com');

    expect(employee.getRole()).toEqual(expect.any(String));
});