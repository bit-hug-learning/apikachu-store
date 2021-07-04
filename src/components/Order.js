import "../styles/components/order.scss";
import SearchBar from "./SearchBar";

function Order() {
  return html`
    ${SearchBar()}
    <div class="orderpagination">
      <div class="dropdown">
        <button class="order-button">
          <p class="order-button__text">Order</p>
          <span class="order-button__icon"></span>
        </button>
        <div class="dropdown-content">
          <a class="dropdown-content__min-max" href="#">Min-Max</a>
          <a class="dropdown-content__max-min" href="#">Max-Min</a>
          <a class="dropdown-content__a-z"  href="#">A - Z</a>
          <a class="dropdown-content__z-a"  href="#">Z - A</a>
        </div>
      </div> 
      <div>
      Pagination
      </div>
    </div>
  `;
}

export default Order;