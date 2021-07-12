import '../styles/components/detail.scss';
import pokedexTop from '../assets/images/pokedex_top.svg';
import pokedexBottom from '../assets/images/pokedex_bottom.svg';
import pokedexRight from '../assets/images/pokedex_right.svg';
import pokedexHinge from '../assets/images/pokedex_hinge.svg';
import pokedexHingeV from '../assets/images/pokedex_hinge-v.svg';
import leftArrow from '../assets/icons/leftArrow.svg';
import pokemonTypes from '../utils/pokemonTypes';
import Button from '../components/Button';
import router from 'router';



function Stats(stats) {
  return stats
    .map((stat) => html`<div>${stat.name.split('')[0].toUpperCase().concat(stat.name.slice(1))}: ${stat.base_stat}</div>`)
    .join('');
}

function Detail({ image, id, name, types = [], stats, weight, height } = {}) {
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
                <img src="${image}" alt="" />
              </div>
            </div>

            <div class="pokedex__frame-container name">
              <div class="pokedex__name">
                <h2># ${id < 10 ? `00${id}` : id} ${name.split('')[0].toUpperCase().concat(name.slice(1))}</h2>
              </div>
            </div>

            <div class="pokedex__buttons">
              <button class="pokedex__button-left">
                <img src="${leftArrow}" alt="" />
                <div class="pokedex__container-buttons"></div>
              </button>
              <div class="pokedex__frame-container">
                <div class="pokedex__price">$ ${weight / 100}</div>
              </div>
              <button class="pokedex__button-right">
                <img src="${leftArrow}" alt="" />
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
        ${Button('Add to cart', 'btn btn--add', true)}
        ${Button('Shop now', 'btn btn--buy', true)}
      </div>

      <div class="back-to-home"><span></span>Back</div>
    </div>
  `;
}

const pokedexButtons = () => {
  console.log("pokedexButtons");

  const leftButton = document.querySelector(".pokedex__button-left");
  console.log(leftButton);
  leftButton.addEventListener("click", () => {
    console.log("left clicked");
    let id = router.getParams().pokemonId;
    router.navigateTo(`/detail/${parseInt(id) - 1}`);
  })

  const rightButton = document.querySelector(".pokedex__button-right");
  // console.log(rightButton);
  rightButton.addEventListener("click", () => {
    console.log("right clicked");
    let id = router.getParams().pokemonId;
    router.navigateTo(`/detail/${parseInt(id) + 1}`);
  })

}


export { Detail, pokedexButtons };
