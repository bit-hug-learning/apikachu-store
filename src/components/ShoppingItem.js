import store from 'context/index';
import Home from '../pages/Home';
import '../styles/components/shopping.scss';
import { initialMsg } from './Menu';

function ShoppingItem({ id, image, name, price } = {}) {
  return html`
    <div class="shopping__item-container">
      <img class="shopping__item-image" src="${image}" alt="Pic of ${name}" />
      <div class="shopping__item-name">
        ${name[0].toLocaleUpperCase() + name.slice(1)}
      </div>
      <div class="shopping__item-price">$ ${price}</div>
      <span class="shopping__item-delete" data-pokemonid="${id}"></span>
    </div>
  `;
}

ShoppingItem.afterRender = async (counter) => {
  const deleteButton = document.querySelectorAll('.shopping__item-delete');

  const containers = document.querySelectorAll('.shopping__item-container');
  deleteButton.forEach((element) => {
    element.addEventListener('click', function removeItem() {
      element.parentNode.remove();
      store.set((state)=>({
        ...state,
        cart: state.cart.filter(
          (c) => c !== parseInt(element.dataset.pokemonid)
        ),
      }))

      window.localStorage.setItem('cart', JSON.stringify(store.get().cart));
      // containers.length == 0 ? console.log('vacio') : '';
    });
  });
};

export { ShoppingItem };
