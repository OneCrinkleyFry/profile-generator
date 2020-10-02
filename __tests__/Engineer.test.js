const Engineer = require('../lib/Engineer');

test('Does the Engineer set up correctly?', () => {
    const engineer = new Engineer('dave', 123, 'j@j.com', 'sithSlave');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('checks the getGithub method', () => {
    const engineer = new Engineer('dave', 123, 'j@j.com', 'sithSlave');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});