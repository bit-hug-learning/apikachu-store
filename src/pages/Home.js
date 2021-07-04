import Filter from 'components/Filter';
import Hero from 'components/Hero';
import pokemonData from '../mocks/pokemonProcessed.json';
import Card from '../components/Card';

const Home = () => html` ${Hero()} ${Filter()} ${Card(pokemonData)}`;

Home.afterRender = () => {
  Filter.afterRender();
};

export default Home;
