// Section 6: CRUD

const users = require('../data/userArray.json');
const saveFile = require('../api/saveFile');

console.log('Users:');
console.table(users);

for (let [index, value] of users.entries()) {
    value.level = 'Pro';
    users[index] = value;
}

console.log('Batch:');
console.table(users);

saveFile.toJSON(users, 'userArray');

/* TODO:
    [x] Import `userArray.json`
    [x] Import `saveFile` API
    [x] Add property `level` to whole users
    [x] Update information on `userArray.json` file
*/
