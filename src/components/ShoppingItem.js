import Home from '../pages/Home';
import '../styles/components/shopping.scss'
import { initialMsg } from './Menu';

function ShoppingItem({image, name, price} = {}) {
  return html`
    <div class="shopping__item-container">
      <img class="shopping__item-image" src="${image}" alt="Pic of ${name}">
      <div class="shopping__item-name">${name[0].toLocaleUpperCase()+name.slice(1)}</div>
      <div class="shopping__item-price">$ ${price}</div>
      <span class="shopping__item-delete"></span>
    </div>
  `;
}

ShoppingItem.afterRender = async (counter) => {
  
  const deleteButton = document.querySelectorAll(".shopping__item-delete");
  // console.log(counter);
  // console.log(deleteButton);
  // console.log(deleteButton.length);
  const containers = document.querySelectorAll(".shopping__item-container");
      console.log("before "+containers)
      console.log("before "+containers.length)
  deleteButton.forEach((element) => {
    element.addEventListener("click", function removeItem() {
      
      
      element.parentNode.remove();
      console.log("after "+containers)
      console.log("after "+containers.length)
      // console.log(containers.length);
      containers.length == 0 ? console.log("vacio") : ""; 
      // console.log("cuando no hay nada, nodo:" + containers)
      // console.log("cuando no hay nada, longitud:" + containers.length)
      // console.log(deleteButton.length);
    });
  })

  
}

export { ShoppingItem };