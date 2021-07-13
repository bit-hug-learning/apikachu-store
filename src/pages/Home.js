import Filter from 'components/Filter';
import Hero from 'components/Hero';
import Pagination from 'components/Pagination';
import 'styles/components/home.scss';
import Order from 'components/Order';
import SearchBar from 'components/SearchBar';
import { getPokemonByRange } from 'utils/fetchData';
import store from 'context/index';
import paginateArray from 'utils/paginateArray';
import { setAllPokemons } from 'context/actions';
import {Card, Wished, CardToDetail}  from '../components/Card';
import FilterIcon from '../assets/icons/filter.png';

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
  store.subscribe((state) => {
    homeCards.innerHTML = paginateArray(
      state.filteredPokemons,
      state.pagination,
      12
    )
      .map((pokemon) => Card(pokemon))
      .join('');
    CardToDetail();  
    Wished(); 
  });

  const pokemons = await getPokemonByRange(1, 151);
  setAllPokemons(pokemons);
};

export default Home;
