import '../styles/components/detail.scss';
import pokedexTop from '../assets/images/pokedex_top.svg';
import pokedexBottom from '../assets/images/pokedex_bottom.svg';
import pokedexRight from '../assets/images/pokedex_right.svg';
import pokedexHinge from '../assets/images/pokedex_hinge.svg';
import leftArrow from '../assets/icons/leftArrow.svg';
import pokemonTypes from '../pokemonTypes';

function Stats(stats) {
  return stats
    .map((stat) => `<div>${stat.name} ${stat.base_stat}</div>`)
    .join('');
}

function Detail({ image, id, name, types = [], stats, weight, height } = {}) {
  return /*html*/ `
    <div class="pokedex">
      <img class="pokedex__top" src=${pokedexTop} />
      <div class="pokedex__content-1">
        <div class="pokedex__image">
          <img src="${image}" alt="" />
        </div>
        <div class="pokedex__name">
          <h2>#${id} ${name}</h2>
        </div>
        <div class="pokedex__buttons">
          <button>
            <img src="${leftArrow}" alt="" />
          </button>
          <div class="pokedex__price">$${weight / 10}</div>
          <button>
            <img src="${leftArrow}" alt="" />
          </button>
        </div>
      </div>
      <img class="pokedex__hinge" src=${pokedexHinge} />
      <div class="pokedex__content-2">
        <img class="pokedex__right" src=${pokedexRight} />
        <div class="pokedex__types">
          Type
          <img
            src="${pokemonTypes[types[0]].image}"
            alt="${pokemonTypes[types[0]].name}"
          />
          ${
            types[1]
              ? `<img src="${pokemonTypes[types[1]].image}" alt="${
                  pokemonTypes[types[1]].name
                }" />`
              : ''
          }
        </div>
        <div class="pokedex__stats">
          <p>Stats</p>
          <div>${Stats(stats)}</div>
          <div>Weight: ${weight} Height: ${height}</div>
        </div>
      </div>
      <img class="pokedex__bottom" src=${pokedexBottom} />
    </div>
  `;
}

export default Detail;
