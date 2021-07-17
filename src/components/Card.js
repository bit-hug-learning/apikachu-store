import '../styles/components/card.scss';
import pokemonTypes from '../utils/pokemonTypes';
import Button from './Button';
import router from '../router';
import store from 'context/index';

function Card({ image, id, name, types = [], weight } = {}) {
  const { favorites } = store.get()
  console.log(favorites)


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
      <div class="card__button">${Button('add to cart', 'btn btn--add')}</div>
    </article>
  `;
}
const Wished = () => {
  const heart = document.querySelectorAll('.card__wish-list-icon');

  heart.forEach(element => {
    element.addEventListener("click", (event) => {
      console.log("wished");
      element.classList.toggle("clicked");
      console.log(element.dataset)
      event.stopPropagation();
      store.set(state=>({
        ...state,
        favorites: [...state.favorites, parseInt(element.dataset.pokemonid)]
      }))
    });
  });
};

const CardToDetail = () => {
  const cards = document.querySelectorAll('.card__figure');

  cards.forEach((element) => {
    element.addEventListener('click', () => {
      console.log('clicked');
      let str = element.firstChild.getAttribute('src');
      let id = str.split('/').pop().split('.svg')[0];
      console.log(id);
      router.navigateTo(`./detail/${id}`, true);
    });
  });
};

export { Card, Wished, CardToDetail };
