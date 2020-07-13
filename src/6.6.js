// Section 6: CRUD

const users = require('../data/userArray.json');
const saveFile = require('../api/saveFile');

console.log('Users:');
console.table(users);

const description = {
    handle: "carobsts",
    name: "Caro Bustos",
    country: "AR"
};

users.push(description);

/* TODO:
    [x] Add Caro to `users` list using `description` object
    [x] Update information on `userObject.json` file
*/

console.log('Create:');
console.table(users);

saveFile.toJSON(users, 'userArray');