const url = 'https://pokeapi.co/api/v2/pokemon';

const pokemonCache = {};

/**
 * returns a pokemon data
 * @param {number|string} id id or pokemon name
 */
export async function getPokemon(id) {
  if (pokemonCache[id]) return pokemonCache[id];

  let data = await fetch(`${url}/${id}`, { cache: 'force-cache' });
  data = await data.json();

  const pokemon = {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    image: data.sprites.other.dream_world.front_default,
    stats: data.stats.map((stat) => ({
      name: stat.stat.name,
      base_stat: stat.base_stat,
    })),
    types: data.types.map((type) => type.type.name),
    price: data.weight / 100,
  };

  pokemonCache[id] = pokemon;

  return pokemon;
}

/**
 * returns a list of pokemon data in the specified range
 * @param {number} min
 * @param {number} max inclusive
 */
export async function getPokemonByRange(min = 1, max = 10) {
  const promises = [];

  for (let i = min; i <= max; i++) promises.push(getPokemon(i));

  const results = await Promise.all(promises);
  return results;
}

export async function getAllPokemonsNames() {
  let data = await fetch(`${url}?limit=151`);
  data = await data.json();

  return data.results;
}
