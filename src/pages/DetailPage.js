import Detail from 'components/Detail';
import { getParams } from 'router';
import { getPokemon } from 'utils/fetchData';
import pokemonData from '../mocks/pokemonProcessed.json';

const DetailPage = async () => {
  const { pokemonId } = getParams();
  const pokemon = await getPokemon(pokemonId);
  return Detail(pokemon);
};

export default DetailPage;
