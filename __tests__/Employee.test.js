const { Employee = require('../lib/Employee')}
const { expect, test} = require('@jest/globals');


test('generates employee object', () => {
    const employee = new Employee ('John', '1', 'john@email.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('john@email.com');
});


test('generates employee name', () => {
    const employee = new Employee ('John', '1', 'john@email.com');

    expect(employee.getName()).toEqual(expect.stringContaining('John'));
});


test('generates employee id', () => {
    const employee = new Employee ('John', '1', 'john@email.com');

    expect(employee.getId()).toEqual(expect.stringContaining('1'));
});


test('generates employee email', () => {
    const employee = new Employee ('John', '1', 'john@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('john@email.com'));
});


test('generates employee role', () => {
    const employee = new Employee ('John', '1', 'john@email.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('employee'));
});