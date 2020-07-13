// Section 5: Properties

const character = {
    name: 'Homer J Simpson',
    age: 39,
    home: {
        address: 'Avenida Siempreviva 742',
        city: 'Springfield',
    },
    isEmployed: true,
    sons: ['Bart', 'Lisa', 'Maggie'],
};

// const age = character.age;
// const city = character.home.city;
// const sons = character.sons;

const {
    age,
    home: { city },
    sons,
} = character;

/* TODO:
    [x] Create variables for `age`, `city` and `sons` values with properties notation
    [x] Create same variables from `character` object` using destructuring
*/

console.log(age);
console.log(city);
console.log(sons);
