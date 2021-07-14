import "../styles/components/searchbar.scss";
import store from '../context/index';



function SearchBar() {
  return html`
    <div class="search-bar">
      <span class="search-bar__icon"></span>
      <input class="search-bar__input" type="text" placeholder="Search" id="searched"> 
    
    </div>
  `;

}

SearchBar.afterRender = () => {

  const input  = document.querySelector('.search-bar__input');
  input.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      store.set((state)=>({
        ...state,
        filteredPokemons: state.allPokemons.filter((pokemon)=> pokemon.name.includes(input.value.toLowerCase())
          )
      }));
   }
  });

};

export default SearchBar;