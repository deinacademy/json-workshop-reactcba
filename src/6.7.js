// Section 6: CRUD

const users = require('../data/userArray.json');

console.log('Users:');
console.table(users);

const handle = 'sanchez_ata';

// Option 1
const result = users.find((user) => user.handle === handle);

// Option 2
// let result = '';
// const length = users.length;
// for (let index = 0; index < length; index++) {
//     const user = users[index];
//     if (user.handle === handle) {
//         result = user;
//         break;
//     }
// }

// Option 3
// let result = '';
// const length = users.length;
// for (let index = 0; index < length; index++) {
//     const user = users[index];
//     if (user.handle !== handle) {
//         continue;
//     }
//     result = user;
// }

//Option 4
// let result = '';
// for (const user of users) {
//     if (user.handle === handle) {
//         result = user;
//         break;
//     }
// }

//Option 5 (best performance)
// let result = '';
// for (const key in users) {
//     const user = users[key];
//     if (user.handle === handle) {
//         result = user;
//         break;
//     }
// }

//Option 6 (can't be stopped)
// let result = '';
// users.forEach((user) => {
//     if (user.handle === handle) {
//         result = user;
//     }
// });

/* TODO:
    [x] Read Ata from `users` list and save on `result` variable
*/

console.log('Read:');
console.log(`Name:  ${result.name}`);
console.log(`Country: ${result.country}`);
