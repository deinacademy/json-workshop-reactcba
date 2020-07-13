// Section 4: Conversions

const getAge = () => undefined;

const badBoy = {
    isValid: false,
    age: getAge(),
    current: new Date(),
};

const result = JSON.stringify(badBoy, ['current'], 2);

/* TODO:
    [x] Convert `badBoy` object to string and save on `result` variable
    [x] Remove `toJson()` from `Date()` and return `undefined` on `getAge()`
    [x] Filter `current` properties, and format text with 2 spaces
*/

console.log(result);
