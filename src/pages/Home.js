import Filter from 'components/Filter';
import Hero from 'components/Hero';
import Pagination from 'components/Pagination';
import pokemonData from '../mocks/pokemonProcessed.json';
import Card from '../components/Card';
import 'styles/components/home.scss';
import Order from 'components/Order';
import FilterIcon from '../assets/icons/filter.png';
import SearchBar from 'components/SearchBar';
import { getPokemonByRange } from 'utils/fetchData';

const Home = () => html`
  <div class="home">
    ${Hero()}
    <div class="home__container">
      ${Filter()}

      <div>
        <div class="home__controls">
          ${SearchBar()}
          <div class="filter__icon">
            <img src="${FilterIcon}" alt="Filter" />
          </div>
          ${Order()} ${Pagination()}
        </div>
        <div class="home__cards"></div>
      </div>
    </div>
  </div>
`;

Home.afterRender = async () => {
  Filter.afterRender();
  Pagination.afterRender();

  const homeCards = document.querySelector('.home__cards');
  const pokemons = await getPokemonByRange(1, 151);

  homeCards.innerHTML = pokemons.map((pokemon) => Card(pokemon)).join('');
};

export default Home;
