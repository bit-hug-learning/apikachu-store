import store from './index';

export const setAllPokemons = (pokemons) => {
  store.set((state) => ({
    ...state,
    allPokemons: pokemons,
  }));
};

export const setPagination = (current) => {
  store.set((state) => ({
    ...state,
    pagination: current,
  }));
};
