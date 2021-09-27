const Engineer = require('../lib/Engineer');



test("get Engineer's github", () => {
    const engineer = new Engineer('Deanna', '7', 'deanna@email.com', 'sinceerengineer');

    expect(engineer.github).toEqual(expect.ant(String));
})


test("get Engineer's role", () => {
    const engineer = new Engineer('Deanna', '7', 'deanna@email.com', 'sinceerengineer');

    expect(engineer.getRole()).toEqual(expect.stringCOntaining('engineer'));
});