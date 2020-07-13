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

character.sons.forEach((son, index) => {
    console.log(`Hijo ${index + 1}: ${son}`);
});

/* TODO:
    [x] Show each son in a different line
*/
