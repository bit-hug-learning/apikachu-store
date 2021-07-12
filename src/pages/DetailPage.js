import { Detail, pokedexButtons } from 'components/Detail';
import { getParams } from 'router';
import { getPokemon } from 'utils/fetchData';




const DetailPage = async () => {
  const { pokemonId } = getParams();
  const pokemon = await getPokemon(pokemonId);
  return Detail(pokemon);
};

// Detailpage.afterRender = async () => {
//   Detail.afterRender();

// }

export default DetailPage;
