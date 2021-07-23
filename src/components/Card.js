import '../styles/components/card.scss';
import pokemonTypes from '../utils/pokemonTypes';
import Button from './Button';
import router from '../router';
import store from 'context/index';
import Layout from './Layout';
import { Menu } from './Menu';
import { ShoppingItem, shopping } from 'components/ShoppingItem';


function Card({ image, id, name, types = [], weight } = {}) {
  const { favorites } = store.get()
  const isClicked = favorites.includes(id)

  return html`
    <article class="card">
      <div
        class="card__figure"
        style="background: ${pokemonTypes[types[0]].color}"
      >
        <img class="card__image" src="${image}" alt="${name}" />
        <span id="heart" class="card__wish-list-icon ${isClicked?'clicked':''}" data-pokemonid="${id}"></span>
      </div>
      <div class="card__body">
        <div class="card__primary-info">
          <h2 class="card__name">
            <span class="card__id">${id < 10 ? `00${id}` : id}</span>
            ${name.split('')[0].toUpperCase().concat(name.slice(1))}
          </h2>
          <span class="card__types">
            <img
              src="${pokemonTypes[types[0]].image}"
              alt="${pokemonTypes[types[0]].name}"
              width="30px"
              height="30px"
            />
            ${types[1]
              ? html`<img
                  src="${pokemonTypes[types[1]].image}"
                  alt="${pokemonTypes[types[1]].name}"
                  width="30px"
                  height="30px"
                />`
              : ''}
          </span>
        </div>
        <div class="card__price">$ ${weight / 100}</div>
      </div>
      <div class="card__button" data-pokemonid="${id}">${Button('add to cart', 'btn btn--add')}</div>
    </article>
  `;
}

let counter = {fav: 0, cart: 0, idc: ""};

const Wished = () => {
  const heart = document.querySelectorAll('.card__wish-list-icon');
  heart.forEach(element => {

    element.addEventListener("click", (event) => {
      console.log(element.classList.contains('clicked').length);
      if(element.classList.contains('clicked')) {
        --counter.fav;
        Menu.afterRender(counter);
        element.classList.remove('clicked');
        store.set((state)=>({
          ...state,
          favorites: state.favorites.filter(fav => fav !== parseInt(element.dataset.pokemonid))
        }));
      }else{
        ++counter.fav;
        element.classList.add("clicked");
        Menu.afterRender(counter);

        // console.log(element.dataset.pokemonid)
        store.set(state=>({
          ...state,
          favorites: [...state.favorites, parseInt(element.dataset.pokemonid)]
        }))
      }
      window.localStorage.setItem('favorites', JSON.stringify(store.get().favorites));
      event.stopPropagation();
    });
  });
};

const CardToDetail = () => {
  const cards = document.querySelectorAll('.card__figure');

  cards.forEach((element) => {
    element.addEventListener('click', () => {
      let str = element.firstChild.getAttribute('src');
      let id = str.split('/').pop().split('.svg')[0];
      router.navigateTo(`./detail/${id}`, true);
    });
  });
};



const addToCart = () => {
  const cardButton = document.querySelectorAll(".card__button");
  
  cardButton.forEach((element) => {
    element.addEventListener("click", function createAlert() {
      counter.idc = element.dataset.pokemonid;
      ++counter.cart;
      Menu.afterRender(counter);
      // console.log(counter.cart)
      // ShoppingItem.afterRender(counter);
      

      const alertBox = document.createElement("div");
      alertBox.textContent = "Added to Cart";
      
      element.appendChild(alertBox);
      alertBox.setAttribute("class", "card__added-to-cart")
      setTimeout(() => { element.removeChild(alertBox) }, 2000);
      element.removeEventListener("click", createAlert);
  
      const buttonDisabled = document.createElement("div");
      buttonDisabled.innerHTML = Button('Already added to cart', 'btn btn--add', false, true);
      element.children[0].replaceWith(buttonDisabled);
      
    });     
  })

}

export { Card, Wished, CardToDetail, addToCart, counter};
