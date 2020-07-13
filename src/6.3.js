// Section 6: CRUD

const users = require('../data/userObject.json');
const saveFile = require('../api/saveFile');

console.log('Personajes:');
console.table(users);

const handle = 'selene_nr';
/* TODO:
    [ ] Update Lara `country` to `DE` on `users` list
    [ ] Update information on `userObject.json` file
*/

console.log('Update:');
console.table(users);