import store from 'context/index';

function filterPokemons(){
  // let pokemons = store.get().allPokemons

  // pokemons = searchFilter(pokemons)
  // // pokemons = typeFilter(pokemons)
  // // pokemons = priceFilter(pokemons)

  // store.set((state) => ({
  //   ...state,
  //   filteredPokemons: pokemons
  // }))
}

export default filterPokemons

function searchFilter(pokemons){
  let search = store.get().filters.search
  if(search){
    return pokemons.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
  }
  return pokemons
}