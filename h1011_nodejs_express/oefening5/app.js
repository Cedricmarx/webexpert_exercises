var person = require('./person');
var colors = require('colors');
var _ = require('underscore');

var personArray = [];

personArray.push(
    new person('Cedric', 'Marx', 'marxcedric@hotmail.com'),
    new person('Chantal', 'van der Spoel', 'chantalvanderspoel@outlook.com'),
    new person('Guy', 'Marx', 'armond53@hotmail.com')
);

personArray.forEach(element => {
    console.log('First Name: ' + element.firstName + '\r\nLast Name: ' + element.lastName + colors.blue('\r\nE-mail: ' + element.email) + '\r\n');
});

console.log('\r\nFirst element in array with underscore');
var first = _.first(personArray);
console.log('First Name: ' + first.firstName + '\r\nLast Name: ' + first.lastName + colors.blue('\r\nE-mail: ' + first.email) + '\r\n');

console.log('\r\nLast element in array with underscore');
var last = _.last(personArray);
console.log('First Name: ' + last.firstName + '\r\nLast Name: ' + last.lastName + colors.blue('\r\nE-mail: ' + last.email) + '\r\n');

console.log('\r\nSort array by last name');
var sortedPersonArrayByLastName = _.sortBy(personArray, (person) => {
    return person.lastName;
});

sortedPersonArrayByLastName.forEach(element => {
    console.log('First Name: ' + element.firstName + '\r\nLast Name: ' + element.lastName + colors.blue('\r\nE-mail: ' + element.email) + '\r\n');
});