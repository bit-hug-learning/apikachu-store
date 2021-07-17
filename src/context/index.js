import createStore from 'utils/store';

const initialState = {
  allPokemons: [],
  filteredPokemons: [],
  favorites: JSON.parse(window.localStorage.getItem('favorites')) || [],
  isFiltered : false,
  pagination: 1,
};

const filters = {
  price: {
    min: 0,
    max: 0
  },
  types: ['normal'],
  search: '',
},

const store = createStore(initialState);

export default store;
