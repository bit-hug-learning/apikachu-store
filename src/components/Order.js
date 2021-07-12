import '../styles/components/order.scss';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import store from '../context/index'

export const orderMinMax = () => {
  const el = document.getElementById("min-max")

  el.addEventListener("click", () => {
    const order = document.getElementById("order-label")
    order.innerHTML = "Min-Max"
    const { filteredPokemons } = store.get()
  
    const fn = (a, b) => {
      console.log(a.price)
      return(
        a.price - b.price
      )
    }
  
    store.set((state) => {
      return({
        ...state,
        filteredPokemons: filteredPokemons.sort(fn)
      })
    })
  })
}


function Order() {
  return html`
    <div class="orderpagination">
      <div class="dropdown">
        <button class="order-button">
          <p class="order-button__text" id="order-label">Order</p>
          <span class="order-button__icon"></span>
        </button>
        <div class="dropdown-content">
          <a class="dropdown-content__min-max" id="min-max">Min-Max</a>
          <a class="dropdown-content__max-min" href="#" id="max-min">Max-Min</a>
          <a class="dropdown-content__a-z" href="#" id="a-z">A - Z</a>
          <a class="dropdown-content__z-a" href="#" id="z-a">Z - A</a>
        </div>
      </div>
    </div>
  `;
}

export default Order;
