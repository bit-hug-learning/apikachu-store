import "../styles/components/searchbar.scss";

function SearchBar() {
  return html`
    <div class="search-bar">
      <span class="search-bar__icon"></span>
      <input class="search-bar__input" type="text" value="Search">
    
    </div>
  `;
}

export default SearchBar;