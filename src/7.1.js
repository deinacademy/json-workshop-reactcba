// Section 7: Challenge

const pokemonApi = require('../api/pokemon.js');
const { stripIndent } = require('common-tags');

const show = ({ name, abilities, types, weight = '' }) => {
    //console.log(result);

    const ability = abilities.map(({ ability }) => ability.name);
    const type = types.map(({ type }) => type.name);

    console.log(stripIndent`
        Name: ${name}
        Abilities: ${ability.length > 0 ? ability.join(', ') : ''}
        Types: ${type.length > 0 ? type.join(', ') : ''}
        Weight: ${weight}
    `);

    /* TODO:
        [x] What is his name?
        [x] What are his abilities?
        [x] What are his types?
        [x] What is his weight?
    */
};

(async () => {
    const id = await pokemonApi.getRandomId();
    const result = await pokemonApi.getInfo(id);
    show(result);
})().catch((error) => console.log(`Error: ${error}`));
