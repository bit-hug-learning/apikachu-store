import Detail from '../components/Detail';
import pokemonData from '../mocks/pokemonProcessed.json';

export default {
  title: 'Components/Detail Page',
};

export const Main = Detail.bind({});

Main.args = { ...pokemonData };
