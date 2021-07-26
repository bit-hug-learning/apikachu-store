import 'styles/components/hero.scss';
import imageMobile from 'assets/images/heropika320.png';
import imageTablet from 'assets/images/heropika550.png';
import pokeball from 'assets/images/pokeball_pikachu.png';

function Hero() {
  return html`
    <div class="banner">
    10% OFF your first purchase!
      <a href="/detail/${Math.floor(Math.random() * (151 - 1) + 1)}" class="banner__link" data-link>I'M FEELING LUCKY !<a>
    </div>
    <div class="hero">
        <div class="hero__image">
          <picture>
            <source srcset="${imageTablet}" media="(min-width: 768px)" width="550px" height="360"/>
            <img src="${imageMobile}" alt="pikachu hero image" width="320" height="309"/>
          </picture>
        </div>
        <div class="hero__text">       
          <div class="hero__title">
            <p>Let's Get<p>
            <h1>Pikachu</h1>
          </div>
          <div class="hero__cta">
            <span class="hero__price">$0.60</span><button class="btn-shop-pikachu btn btn--buy btn--big" dataset-pokemonid = "25">Shop now</button> <img src="${pokeball}" width="50" height="50" style="transform: rotate(15deg)"/>
          </div>
        </div>
    </div>
  `;
}



Hero.afterRender = () => {
  const shopNowButton = document.querySelector(".btn-shop-pikachu");
  const shoppingModal = document.querySelector('.menu__shopping-cart');
  let pikacount = 0;

  shopNowButton.addEventListener('click', () => {})

  
}


export { Hero };
