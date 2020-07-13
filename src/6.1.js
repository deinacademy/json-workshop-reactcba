// Section 6: CRUD

const users = require('../data/userObject.json');
const saveFile = require('../api/saveFile');

console.log('Users:');
console.table(users);

const description = {
    name: "Caro Bustos",
    country: "AR"
};
const handle = 'carobsts';
users[handle] = description;

/* TODO:
    [x] Add Caro to `users` list using `description` object
    [x] Update information on `userObject.json` file
*/

console.log('Create:');
console.table(users);

saveFile.toJSON(users, 'userObject');