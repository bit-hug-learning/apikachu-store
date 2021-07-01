import Detail from 'components/Detail';
import { getParams } from 'router';
import pokemonData from '../mocks/pokemonProcessed.json';

const DetailPage = () => {
  console.log(getParams());
  return Detail(pokemonData);
};

export default DetailPage;
