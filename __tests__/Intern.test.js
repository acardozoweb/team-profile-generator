const Intern = require('../lib/Intern');



test("get Intern's school", () => {
    const intern = new Intern('Ryan', '05', 'ryan@email.com', 'lackawanna');

    expect(intern.school).toEqual(expect.ant(String));
});

test("get Intern's role", () => {
    const intern = new Intern('Ryan', '05', 'ryan@email.com', 'lackawanna');

    expect(intern.getRole()).toEqual(expect.stringContaining("intern"));
});