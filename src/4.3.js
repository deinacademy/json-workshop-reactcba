// Section 4: Conversions

const getAge = () => 18;

const badBoy = {
    isValid: false,
    age: getAge(),
    current: new Date().toJSON(),
};

/* TODO:
    [ ] Convert `badBoy` object to string and save on `result` variable
    [ ] Remove `toJson()` from `Date()` and return `undefined` on `getAge()`
    [ ] Filter by `current` properties, and format text with 2 spaces
*/

console.log(result);
