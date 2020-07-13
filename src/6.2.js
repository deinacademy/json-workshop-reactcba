// Section 6: CRUD

const users = require('../data/userObject.json');

console.log('Users:');
console.table(users);

const handle = 'sanchez_ata';
const result = users[handle];

/* TODO:
    [x] Read Ata from `users` list and save on `result` variable
*/

console.log('Read:');
console.log(`Name:  ${result.name}`);
console.log(`Country: ${result.country}`);