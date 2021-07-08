import store from './index';

export const setAllPokemons = (pokemons) => {
  store.set((state) => ({
    ...state,
    filteredPokemons: pokemons,
    allPokemons: pokemons,
  }));
};

export const setPagination = (current) => {
  store.set((state) => ({
    ...state,
    pagination: current,
  }));
};
