const Manager = require('../lib/Manager');



test ("capture manager's office number", () => {
    const manager = new Manager("Michael", "10", "michael@email.com", 5)

    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test ("capture manager's role", () => {
    const manager = new Manager("Michael", "10", "michael@email.com", 5)

    expect(manager.getRole()).toEqual(expect.stringContaining('manager'));
})