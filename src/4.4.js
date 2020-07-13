// Section 4: Conversions

const json = '{"isValid": false, "age": getAge(), "current": (new Date()).toJSON()}';

/* TODO:
    [ ] Convert string `json` to `badBoy` object ¿it's posible?
    [ ] Change `age` value with 18 number and `current` with "2020-04-01T03:15:32.130Z"
    [ ] Try convert using the reviver option, ensuring `current` was parsed to ISO-8601 date format
*/

console.log(badBoy);
