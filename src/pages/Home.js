import Filter from 'components/Filter';
import Hero from 'components/Hero';
import Pagination from 'components/Pagination';
import pokemonData from '../mocks/pokemonProcessed.json';
import Card from '../components/Card';

const Home = () => html` ${Hero()} ${Filter()} ${Card(pokemonData)}`;

Home.afterRender = () => {
  Filter.afterRender();
  Pagination.afterRender();
};

export default Home;
