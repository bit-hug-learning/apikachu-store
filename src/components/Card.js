import '../styles/components/card.scss';
import pokemonTypes from '../utils/pokemonTypes';
import Button from './Button';

function Card({ image, id, name, types = [], weight } = {}) {
  console.log(types[0]);

  return html`
    <article class="card">
      <div
        class="card__figure"
        style="background: ${pokemonTypes[types[0]].color}"
      >
        <img class="card__image" src="${image}" alt="" />
        <span id="heart" class="card__wish-list-icon"></span>
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
            />
            ${types[1]
              ? `<img src="${pokemonTypes[types[1]].image}" alt="${
                  pokemonTypes[types[1]].name
                }" />`
              : ''}
          </span>
        </div>
        <div class="card__price">$ ${weight / 100}</div>
      </div>
      <div class="card__button">${Button('add to cart', 'btn btn--add')}</div>
    </article>
  `;
}
console.log("pre");
var i;
document.addEventListener("DOMContentLoaded", () => {
  console.log("load");
  const heart = document.querySelectorAll(".card__wish-list-icon");
  console.log(heart);
  for(i=0; i<heart.length; i++){
    heart.addEventListener("click", () => {
      console.log("click");
      // heart.style.backgroundColor = 'red' ;
    });
    }
  });
 


export default Card;
