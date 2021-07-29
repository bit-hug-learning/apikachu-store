import '../styles/components/detail.scss';
import pokedexTop from '../assets/images/pokedex_top.svg';
import pokedexBottom from '../assets/images/pokedex_bottom.svg';
import pokedexRight from '../assets/images/pokedex_right.svg';
import pokedexHinge from '../assets/images/pokedex_hinge.svg';
import pokedexHingeV from '../assets/images/pokedex_hinge-v.svg';
import leftArrow from '../assets/icons/leftArrow.svg';
import pokemonTypes from '../utils/pokemonTypes';
import Button from '../components/Button';
import router, { getParams } from 'router';
import { idFormat } from './Card'
import createAlert from 'utils/createAlert';
import store from 'context/index';


function Stats(stats) {
  return stats
    .map((stat) => html`<div>${stat.name.split('')[0].toUpperCase().concat(stat.name.slice(1))}: ${stat.base_stat}</div>`)
    .join('');
}

function Detail({ image, id, name, types = [], stats, weight, height } = {}) {
  const { cart } = store.get();
  const isCart = cart.includes(id);

  return html`
    <div class="detail">
      <div class="pokedex">
        <div class="pokedex__content-left">
          <div class="pokedex__container-top">
            <img class="pokedex__top" src=${pokedexTop} />
            <div class="pokedex__container-hinge-v">
              <img class="pokedex__hinge-v" src=${pokedexHingeV} />
              <div class="pokedex__bottom-no-mobile"></div>
            </div>
          </div>
          <div class="pokedex__content-1">
            <div class="pokedex__frame-container">
              <div class="pokedex__image">
                <img src="${image}" alt="${name}" />
              </div>
            </div>

            <div class="pokedex__frame-container name">
              <div class="pokedex__name">
                <h2># ${idFormat(`${id}`)} ${name.split('')[0].toUpperCase().concat(name.slice(1))}</h2>
              </div>
            </div>

            <div class="pokedex__buttons">
              <button class="pokedex__button-left">
                <img src="${leftArrow}" alt="left button" />
                <div class="pokedex__container-buttons"></div>
              </button>
              <div class="pokedex__frame-container">
                <div class="pokedex__price">$ ${(weight / 100).toFixed(2)}</div>
              </div>
              <button class="pokedex__button-right">
                <img src="${leftArrow}" alt="right button" />
                <div class="pokedex__container-buttons"></div>
              </button>
            </div>
          </div>
          <img class="pokedex__hinge" src=${pokedexHinge} />
        </div>
        <div class="pokedex__content-right">
          <img class="pokedex__right" src=${pokedexRight} />
          <div class="pokedex__content-2">
            <div class="pokedex__frame-container type">
              <div class="pokedex__types">
                Type
                <img
                  src="${pokemonTypes[types[0]].image}"
                  alt="${pokemonTypes[types[0]].name}"
                />
                ${types[1]
                  ? `<img src="${pokemonTypes[types[1]].image}" alt="${
                      pokemonTypes[types[1]].name
                    }" />`
                  : ''}
              </div>
            </div>

            <div class="pokedex__frame-container stat">
              <div class="pokedex__stats">
                Stats
                <div class="pokedex__stats-data">
                  <div class="pokedex__stats-left">${Stats(stats)}</div>
                  <div class="pokedex__stats-right">
                    <div>Weight: ${weight / 10} Kg</div>
                    <div>Height: ${height / 10} m</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img class="pokedex__bottom" src=${pokedexBottom} />
        </div>
      </div>

      <div class="buttons">
        ${Button('Add to cart', 'btn btn--add btn-add-detail', true, isCart, `data-pokemonid="${id}"`)}
        ${Button('Shop now', 'btn btn--buy btn-shop-detail', true)}
      </div>

      <a class="back-to-home" href="/" data-link><span></span>Back</a>
    </div>
  `;
}

const pokedexButtons = () => {

  const buttons = (direction, className) => {
    const buttonX = document.querySelector(`.${className}`);

    buttonX.addEventListener("click", () => {

      console.log(direction);
      let id = parseInt(router.getParams().pokemonId);
      if(direction === "leftButton") {
        id == 1 ? id = 151 : id--;
      }
      else {
        id == 151 ? id = 1 : id++;
      }
      router.navigateTo(`/detail/${id}`);
    })
  }
  
  buttons("leftButton", "pokedex__button-left");
  buttons("rightButton", "pokedex__button-right");

} 


const detailButtons = () => {

  const addButton = document.querySelector(".btn-add-detail");

  const shopButton = document.querySelector(".btn-shop-detail");
  const shoppingModal = document.querySelector('.menu__shopping-cart');

  shopButton.addEventListener('click', () => {
    shoppingModal.classList.toggle('is-active');
  });

  addButton.addEventListener("click", createAlert(addButton))

  store.subscribe(({cart}) => {
    const isCart = cart.includes(parseInt(router.getParams().pokemonId));
    addButton.disabled = isCart;
  })

}

export { Detail, pokedexButtons, detailButtons };
