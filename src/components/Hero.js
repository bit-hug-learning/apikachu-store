import 'styles/components/hero.scss';
import imageMobile from 'assets/images/heroPikachu.svg';
import imageTablet from 'assets/images/heroPikachu_tablet.svg';
import starImg from 'assets/icons/star.svg';

function Hero() {
  return html`
    <div class="banner">
      FREE Shipping with orders over $35!
      <a href="" class="banner__link">Learn more<a>
    </div>
    <div class="hero">
        <div class="hero__image">
          <picture>
            <source srcset="${imageTablet}" media="(min-width: 764px)"/>
            <img src="${imageMobile}" />
          </picture>
        </div>
        <div class="hero__text">       
          <div class="hero__title">
            <p>Let's Go<p>
            <h1>Pikachu</h1>
          </div>
          <div class="hero__cta">
            <span class="hero__price">$4.99</span><button class="btn btn--buy btn--big">Shop now</button> <img src="${starImg}"/>
          </div>
        </div>
    </div>
  `;
}

export default Hero;
