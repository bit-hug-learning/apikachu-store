import 'styles/components/hero.scss';
import imageMobile from 'assets/images/heropika320.png';
import imageTablet from 'assets/images/heropika550.png';
import pokeball from 'assets/images/pokeball.png';

function Hero() {
  return html`
    <div class="banner">
    10% OFF your first purchase!
      <a href="/detail/${Math.floor(Math.random() * (151 - 1) + 1)}" class="banner__link" data-link>I'M FEELING LUCKY !<a>
    </div>
    <div class="hero">
        <div class="hero__image">
          <picture>
            <source srcset="${imageTablet}" media="(min-width: 1280px)"/>
            <source srcset="${imageTablet}" media="(min-width: 768px)"/>
            <img src="${imageMobile}" alt="pikachu hero image"/>
          </picture>
        </div>
        <div class="hero__text">       
          <div class="hero__title">
            <p>Let's Get<p>
            <h1>Pikachu</h1>
          </div>
          <div class="hero__cta">
            <span class="hero__price">$0.60</span><button class="btn btn--buy btn--big">Shop now</button> <img src="${pokeball}" style="transform: rotate(15deg)"/>
          </div>
        </div>
    </div>
  `;
}

export default Hero;
