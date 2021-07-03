import createStore from 'utils/store';

const initialState = {
  allPokemons: [],
  filteredPokemons: [],
  pagination: 1,
};

const store = createStore(initialState);

export default store;
