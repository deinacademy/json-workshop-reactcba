// Section 6: CRUD

const users = require('../data/userArray.json');

console.log('Users:');
console.table(users);

const description = {
    handle: 'carobsts',
    name: 'Caro Bustos',
    country: 'AR',
};

/* TODO:
    [ ] Add Caro to `users` list using `description` object
    [ ] Update information on `userObject.json` file
*/

console.log('Create:');
console.table(users);
