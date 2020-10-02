const Manager = require('../lib/Manager');

test('Does the manager set up correctly?', () => {
    const manager = new Manager('dave', 123, 'j@j.com', 5555555555);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('checks the get number method', () => {
    const manager = new Manager('dave', 123, 'j@j.com', 5555555555);

    expect(manager.getNumber()).toEqual(expect.any(Number));
});