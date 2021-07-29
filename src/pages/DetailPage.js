import { Detail, pokedexButtons, detailButtons } from 'components/Detail';
import { getParams } from 'router';
import { getPokemon } from 'utils/fetchData';
import seo from 'utils/seo';


const DetailPage = async () => {
  const { pokemonId } = getParams();
  const pokemon = await getPokemon(pokemonId);

  seo({title:pokemon.name})
  
  return Detail(pokemon);
};

DetailPage.afterRender = async () => {
  pokedexButtons();
  detailButtons();

  const pokemons = await getPokemonByRange(1, 151);
  setAllPokemons(pokemons);
}

export default DetailPage;
