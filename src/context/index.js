import createStore from 'utils/store';

const initialState = {
  allPokemons: [],
  filteredPokemons: [],
  isFiltered : false,
  pagination: 1,
  favorites: JSON.parse(window.localStorage.getItem('favorites')) || [],
  cart: JSON.parse(window.localStorage.getItem('cart')) || []
};

const store = createStore(initialState);

export default store;
