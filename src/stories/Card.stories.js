import Card from '../components/Card';
import pokemonData from '../mocks/pokemonProcessed.json';

export default {
  title: 'Components/Card',
  component: Card,
};

export const Main = Card.bind({});
Main.args = { ...pokemonData };
