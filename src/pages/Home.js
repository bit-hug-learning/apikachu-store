import Filter from 'components/Filter';
import Hero from 'components/Hero';
import Pagination from 'components/Pagination';
import 'styles/components/home.scss';
import { Order, orderFunction } from 'components/Order';
import SearchBar from 'components/SearchBar';
import { getPokemonByRange } from 'utils/fetchData';
import store from 'context/index';
import paginateArray from 'utils/paginateArray';
import { setAllPokemons } from 'context/actions';
import {Card, Wished, CardToDetail, addToCart}  from '../components/Card';
import FilterIcon from '../assets/icons/filter.png';
import loader from '../assets/images/inner-loader.png'
import seo from 'utils/seo';


const Home = () => {
  seo({title:"Home"})
  
  return html`
  <div class="home">
    ${Hero()}
    <div class="home__container">
      ${Filter()}
      <div>
      <div class="home__search">
        ${SearchBar()}
        <div class="search-list">
          <datalist id="pokemon-list" class="list-elems">
          </datalist>
        </div>
      </div>
        <div class="home__controls">

          <div class="filter__icon">
            <img src="${FilterIcon}" alt="Filter icon" />
            </div>
            ${Order()} ${Pagination()}
            </div>
            <div class="home__cards">
            <div class="home__cards-loading">
              <img src="${loader}" alt="loader animation">
            </div>
          </div>
          ${Pagination()}
        </div>
      </div>
    </div>
    
`;}

Home.afterRender = async () => {
  Filter.afterRender();
  Pagination.afterRender();
  SearchBar.afterRender();

   

  orderFunction()
  
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
    addToCart();

    // shopping();
   
  });

  const pokemons = await getPokemonByRange(1, 151);
  setAllPokemons(pokemons);
};




export default Home;
