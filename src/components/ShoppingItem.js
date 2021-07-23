import Home from '../pages/Home';
import '../styles/components/shopping.scss'

function ShoppingItem({image, name, price} = {}) {
  return html`
    <div class="shopping__item-container">
      <img class="shopping__item-image" src="${image}" alt="Pic of ${name}">
      <div class="shopping__item-name">${name}</div>
      <div class="shopping__item-price">$ ${price}</div>
      <span class="shopping__item-delete"></span>
    </div>


  `;
}


export default ShoppingItem;