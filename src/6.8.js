// Section 6: CRUD

const users = require('../data/userArray.json');
const saveFile = require('../api/saveFile');

console.log('Personajes:');
console.table(users);

const handle = 'selene_nr';

//Opción 1
const result = users.map((user) => {
    if (user.handle === handle) {
        user.country = 'DE';
    }
    return user;
});

//Opción 2 (with same array)
// const index = users.findIndex((user) => user.handle === handle);
// if (index > -1) {
//     users[index].country = 'DE';
// }

/* TODO:
    [x] Update Lara `country` to `DE` on `users` list
    [x] Update information on `userArray.json` file
*/

console.log('Update:');
console.table(result);

saveFile.toJSON(result, 'userArray');
