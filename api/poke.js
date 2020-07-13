const fetch = require('node-fetch');

const server = 'https://pokeapi.co/api/v2/';
const POKEMONS = 807;

const getRandomPokemon = () => Math.floor(Math.random() * POKEMONS) + 1

const rest = async (endpoint) => {
  let response = await fetch(`${server}/${endpoint}`);
  let data = await response.json();
  return data;
};

const request = (endpoint, callback) => {
  rest(endpoint)
    .then((result) => {
      callback(result);
    })
    .catch((error) => console.error(error.message));
};

module.exports = {
  getRandomPokemon,
  request,
};