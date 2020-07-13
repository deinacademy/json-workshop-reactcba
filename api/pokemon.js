const fetch = require('node-fetch');

const SERVER = 'https://pokeapi.co/api/v2';
const ENDPOINT = {
    COUNT: 'pokemon-species/?limit=0',
    POKEMON: 'pokemon',
};

const getRandomId = async () => {
    let response = await fetch(`${SERVER}/${ENDPOINT.COUNT}`);
    let { count } = await response.json();
    return Math.floor(Math.random() * count) + 1;
};

const getInfo = async (id) => {
    let response = await fetch(`${SERVER}/${ENDPOINT.POKEMON}/${id}`);
    let data = await response.json();
    return data;
};

module.exports = {
    getRandomId,
    getInfo,
};
