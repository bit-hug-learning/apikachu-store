import '../styles/components/card.scss';
import pokemonTypes from '../utils/pokemonTypes';
import Button from './Button';
import router from '../router';
import store from 'context/index';
import { Menu } from './Menu';

const idFormat = (id) => {
  if(id<10){
      return "00" + id;
  } else if(id < 100) {
      return "0" + id;
    } else {
      return id;
    }
}

function Card({ image, id, name, types = [], price } = {}) {
  const { favorites, cart } = store.get();
  const isClicked = favorites.includes(id);
  const isCart = cart.includes(id);

  return html`
    <article class="card">
      <div
        class="card__figure"
        style="background: ${pokemonTypes[types[0]].color}"
      >
        <img class="card__image" src="${image}" alt="${name}" />
        <span
          id="heart"
          class="card__wish-list-icon ${isClicked ? 'clicked' : ''}"
          data-pokemonid="${id}"
        ></span>
      </div>
      <div class="card__body">
        <div class="card__primary-info">
          <h2 class="card__name">
            <span class="card__id">${idFormat(`${id}`)}</span>
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
        <div class="card__price">$ ${price.toFixed(2)}</div>
      </div>
      <div
        class="card__button"
        data-pokemonid="${id}"
      >
        ${Button(isCart?'Already added to cart':'add to cart', 'btn btn--add',false,isCart)}
      </div>
    </article>
  `;
}

let counter = { fav: 0, cart: 0, idc: '' };

const Wished = () => {
  const heart = document.querySelectorAll('.card__wish-list-icon');
  heart.forEach((element) => {
    element.addEventListener('click', (event) => {
      console.log(element.classList.contains('clicked').length);
      if (element.classList.contains('clicked')) {
        --counter.fav;
        Menu.afterRender(counter);
        element.classList.remove('clicked');
        store.set((state) => ({
          ...state,
          favorites: state.favorites.filter(
            (fav) => fav !== parseInt(element.dataset.pokemonid)
          ),
        }));
      } else {
        ++counter.fav;
        element.classList.add('clicked');
        Menu.afterRender(counter);

        // console.log(element.dataset.pokemonid)
        store.set((state) => ({
          ...state,
          favorites: [...state.favorites, parseInt(element.dataset.pokemonid)],
        }));
      }
      window.localStorage.setItem(
        'favorites',
        JSON.stringify(store.get().favorites)
      );
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
  const cardButton = document.querySelectorAll('.card__button');

  cardButton.forEach((element) => {
    element.addEventListener('click', function createAlert() {
      const alertBox = document.createElement('div');
      alertBox.textContent = 'Adding to Cart...';
    
      element.appendChild(alertBox);
      alertBox.setAttribute('class', 'card__alert-added-to-cart');
      setTimeout(() => {
        element.removeChild(alertBox);
        store.set((state) => ({
          ...state,
          cart: [...state.cart, parseInt(element.dataset.pokemonid)],
        }));
        window.localStorage.setItem('cart', JSON.stringify(store.get().cart));
    
      }, 500);

    });
  })    
};

export { Card, Wished, CardToDetail, addToCart, counter, idFormat };
