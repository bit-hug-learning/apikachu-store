const url = 'https://pokeapi.co/api/v2/pokemon/';

export async function getPokemon(id) {
  let data = await fetch(url + id);
  data = await data.json();

  return data;
}
