import '../styles/components/filter.scss';
import { typesList } from 'utils/pokemonTypes';
import store from 'context/index';

function Filter() {
  return html`
    <form class="form" id="form-type">
      <fieldset class="form__price">
        <legend>Price</legend>
        <!--To know more about the dual slider go to: https://github.com/yairEO/ui-range-->
        <div
          class="range-slider flat"
          data-ticks-position="top"
          style='--min:0; --max:50; --prefix:"$"; --value-a:0; --value-b:50; --text-value-a:"0"; --text-value-b:"50";--thumb-size:15px; --thumb-color: #1492E6; --primary-color:#1492E6;'
        >
          <input
            id="range-min"
            type="range"
            min="0.0"
            max="50"
            value="0"
            oninput="this.parentNode.style.setProperty('--value-a',this.value); this.parentNode.style.setProperty('--text-value-a', JSON.stringify(this.value))"
          />
          <output></output>
          <input
            id="range-max"
            type="range"
            min="0.0"
            max="50.0"
            value="50"
            oninput="this.parentNode.style.setProperty('--value-b',this.value); this.parentNode.style.setProperty('--text-value-b', JSON.stringify(this.value))"
          />
          <output></output>
          <div class="range-slider__progress"></div>
        </div>

        <div class="form__price-input">
          <input
            id="minprice"
            type="number"
            min="0.1"
            max="20.0"
            placeholder="$ - min"
          />
          <hr />
          <input
            id="maxprice"
            type="number"
            min="0.1"
            max="20.0"
            placeholder="$ - max"
          />
        </div>
      </fieldset>

      <fieldset class="form__types">
        <legend>Types</legend>
        ${typesList
          .map(
            (type) =>
              `<label>
                  <input type="checkbox" value="${type.id}" />
                  ${type.name}
                </label>`
          )
          .join('')}
      </fieldset>
    </form>
  `;
}

Filter.afterRender = () => {
  const rangeSlider = document.querySelector('.range-slider');
  const filterIcon = document.querySelector('.filter__icon');

  const form = document.querySelector('#form-type');

  const minPrice = document.getElementById('minprice');
  const maxPrice = document.getElementById('maxprice');

  const minRange = document.getElementById('range-min');
  const maxRange = document.getElementById('range-max');

  let filterMinPrice = 0
  let filterMaxPrice = 50
  filterIcon.addEventListener('click', () => {
    form.classList.toggle('form-visible');
  });

  minRange.addEventListener('change', () => {
    minPrice.value = minRange.value;
    filterMinPrice = minRange.value
    store.set((state)=>({
      ...state,
      filteredPokemons: state.allPokemons.filter(({price}) => price > filterMinPrice && price < filterMaxPrice)
    }))
  });
  maxRange.addEventListener('change', () => {
    maxPrice.value = maxRange.value;
    filterMaxPrice = maxRange.value

    store.set((state)=>({
      ...state,
      filteredPokemons: state.allPokemons.filter(({price}) => price > filterMinPrice && price < filterMaxPrice)
    }))
  });

  minPrice.addEventListener('change', () => {
    minRange.value = minPrice.value;
    filterMinPrice = minPrice.value

    store.set((state)=>({
      ...state,
      filteredPokemons: state.allPokemons.filter(({price}) => price > filterMinPrice && price < filterMaxPrice)
    }))
    rangeSlider.style.setProperty('--value-a', minPrice.value);
    rangeSlider.style.setProperty('--text-value-a', minPrice.value);
  });

  maxPrice.addEventListener('change', () => {
    maxRange.value = maxPrice.value;
    filterMaxPrice = maxPrice.value
    store.set((state)=>({
      ...state,
      filteredPokemons: state.allPokemons.filter(({price}) => price > filterMinPrice && price < filterMaxPrice)
    }))
    rangeSlider.style.setProperty('--value-b', maxPrice.value);
    rangeSlider.style.setProperty('--text-value-b', maxPrice.value);
  });
  
  // Type's filter
  const checkboxs = document.querySelectorAll('.form__types input[type=checkbox]');
  let values = [];

  checkboxs.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        values = [...values, checkbox.value];
      } else {
        values.splice(values.indexOf(checkbox.value), 1);
      }

      if(values.length > 0){
        store.set((state)=>({
          ...state,
          filteredPokemons: state.allPokemons.filter(({types}) => {
            //function to know if the type is inside the pokemon type
            const getType = (type) =>{
              return types.includes(type)
            }
            //If "some" type is in the selected, will return true and it'll add it if not, filter it
            return values.some(getType)
          })
          }))
      }
      else{
        // Set all pokemons if there isn't no filter
        store.set((state)=>({
          ...state,
          filteredPokemons: state.allPokemons
        }))
      }
    });
  });
};

export default Filter;
