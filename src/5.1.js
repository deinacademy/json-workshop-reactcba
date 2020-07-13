// Section 5: Properties

const character = {
    name: "Homer J Simpson",
    age: 39,
    home: {
        address: "Avenida Siempreviva 742",
        city: "Springfield"
    },
    isEmployed: true,
    sons: ["Bart", "Lisa", "Maggie"]
}

console.log(`
Name: ${character.name}
Age: ${character.age}
Home:
  Address: ${character.home.address}
  City: ${character.home.city}
Employed: ${character.isEmployed ? 'Yes' : 'No'}
Sons: ${character.sons.join(', ')}
`);

/* TODO:
    [x] Show each property on console
    [x] Add labels to each property on console
*/