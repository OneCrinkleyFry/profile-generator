const Intern = require('../lib/Intern');

test('Does the Engineer set up correctly?', () => {
    const intern = new Intern('dave', 123, 'j@j.com', 'Geraldine High School');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('checks the getSchool method', () => {
    const intern = new Intern('dave', 123, 'j@j.com', 'Geraldine High School');

    expect(intern.getSchool()).toEqual(expect.any(String));
});