// Section 6: CRUD

const users = require('../data/userObject.json');
const saveFile = require('../api/saveFile');

console.log('Personajes:');
console.table(users);

const handle = 'selene_nr';
users[handle].country = 'DE';

/* TODO:
    [x] Update Lara `country` to `DE` on `users` list
    [x] Update information on `userObject.json` file
*/

console.log('Update:');
console.table(users);

saveFile.toJSON(users, 'userObject');
