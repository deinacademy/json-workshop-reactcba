// Section 7: Challenge

const api = require('../api/poke.js');

const show = (result) => {
    console.log(result);
    /* TODO:
        [ ] What is his name?
        [ ] What are his abilities?
        [ ] What is his type?
        [ ] What is his weight?
    */
}

const id = api.getRandomPokemon();
const endpoint = `pokemon/${id}`;
api.request(endpoint, show);