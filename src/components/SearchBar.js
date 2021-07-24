import "../styles/components/searchbar.scss";
import store from '../context/index';



function SearchBar() {
  return html`
    <div class="search-bar">
      <span class="search-bar__icon"></span>
      <input class="search-bar__input" type="text" list="pokemon-list" placeholder="Search" id="searched"> 
  </div>
  `;

}



SearchBar.afterRender = () => {

  const input  = document.querySelector('.search-bar__input');
  ['keyup','change'].forEach(evt => input.addEventListener(evt, (event) => {
      console.log(event);
      //Auto completing the list of pokemons in the searchbar
      const datalist = document.querySelector('.list-elems');
      //Updating the pokemons in the main page
      var e = document.querySelector("#pokemon-list");
      e.innerHTML = "";
      let Store = store.get();
      if( Store.isFiltered ){
            const currentPokemons = { filteredPokemons } = store.get();
            const newPokemons = [];
            //Filtering pokemons
            currentPokemons.forEach((pokemon) => {
              if (pokemon.name.includes(input.value.toLowerCase()))
                newPokemons.push(pokemon);
            });
    
            //Storing new pokemons
            store.set((state)=>({
              ...state,
              filteredPokemons: newPokemons,
            }));
      }else{
          store.set((state)=>({
            ...state,
            filteredPokemons: state.allPokemons.filter((pokemon)=> pokemon.name.startsWith(input.value.toLowerCase())
            )
          }
          ));
          console.log(event.type == "change");
          Store.filteredPokemons.forEach((element, index) => {
              let option = document.createElement("option");
              option.className="list-elem";
              option.innerHTML= element.name;
              datalist.appendChild(option);
          });
          console.log(typeof(event.code) == "undefined");
          if ((event.type == "change") || (typeof(event.code) == "undefined")) {
            var e = document.querySelector("#pokemon-list");
            e.innerHTML = "";
          }
  
        }
    })
    );

};

export default SearchBar;