// Section 6: CRUD

const users = require('../data/userArray.json');
const saveFile = require('../api/saveFile');

console.log('Users:');
console.table(users);

const description = {
    handle: 'carobsts',
    name: 'Caro Bustos',
    country: 'AR',
};

// Option 1 (at End)
//users.push(description);

// Option 2 (at Start)
//users.unshift(description);

// Option 3
const index = 1;
const replace = 0;
users.splice(index, replace, description);

/* TODO:
    [x] Add Caro to `users` list using `description` object
    [x] Update information on `userObject.json` file
*/

console.log('Create:');
console.table(users);

saveFile.toJSON(users, 'userArray');
