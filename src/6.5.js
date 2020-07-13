// Section 6: CRUD

const users = require('../data/userObject.json');
const saveFile = require('../api/saveFile');

console.log('Users:');
console.table(users);

for (let key in users) {
    users[key].level = 'Pro';
}


console.log('Batch:');
console.table(users);

saveFile.toJSON(users, 'userObject');

/* TODO:
    [x] Import `userObject.json`
    [x] Import `saveFile` API
    [x] Add property `level` to whole users
    [x] Update information on `userObject.json` file
*/