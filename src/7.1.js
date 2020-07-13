// Section 7: Challenge

const api = require('../api/pokemon.js');

const show = (result) => {
    console.log(result);

    /* TODO:
        [ ] What is his name?
        [ ] What are his abilities?
        [ ] What are his types?
        [ ] What is his weight?
    */
};

(async () => {
    const id = await pokemonApi.getRandomId();
    const result = await pokemonApi.getInfo(id);
    show(result);
})().catch((error) => console.log(`Error: ${error}`));
