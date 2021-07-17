import '../styles/components/order.scss';
import store from '../context/index';

function Order() {
  return html`
    <div class="orderpagination">
      <div class="dropdown">
        <button class="order-button">
          <p class="order-button__text" id="order-label">Order</p>
          <span class="order-button__icon"></span>
        </button>
        <div class="dropdown-content">
          <a class="dropdown-content__min-max">Min-Max</a>
          <a class="dropdown-content__max-min">Max-Min</a>
          <a class="dropdown-content__a-z">A - Z</a>
          <a class="dropdown-content__z-a">Z - A</a>
        </div>
      </div>
    </div>
  `;
}

const orderFunction = () => {

  const orderBttn = document.querySelector(".order-button");
  orderBttn.addEventListener("mouseenter",() => {
    document.querySelector(".dropdown-content").style.display = "block";
  })
  document.querySelector(".dropdown").addEventListener("mouseleave",() => {
    document.querySelector(".dropdown-content").style.display = "none";
  })

  const orderItem = (className, itemContent) => {
    const blockName = ".dropdown-content__";
    const elem = document.querySelector(`${blockName}${className}`);

    elem.addEventListener("click", () => {

      const order = document.getElementById("order-label")
      order.textContent = itemContent;
      const { filteredPokemons } = store.get()
    
      var fn = (a, b) => {
        return (className == "min-max" ? a.price - b.price : className == "max-min" ? b.price - a.price : className == "a-z" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
      }

      store.set((state) => {
        return({
          ...state,
          filteredPokemons: filteredPokemons.sort(fn)
        })
      }) 
      document.querySelector(".dropdown-content").style.display = "none";
    })
    
  }

  orderItem("min-max","Min-Max");
  orderItem("max-min","Max-Min");
  orderItem("a-z","A-Z");
  orderItem("z-a","Z-A");
}


export { Order, orderFunction };
