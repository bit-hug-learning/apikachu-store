import '../styles/components/menu.scss';
import ApikachuLogo from '../assets/images/apikachuStoreLogo.png';
import UserIcon from '../assets/icons/user_icon.svg';
import WishIcon from '../assets/icons/wish_icon.svg';
import BagIcon from '../assets/icons/bag_icon.svg';
import VectorIcon from '../assets/icons/Vector.svg';
import HamburgerIcon from '../assets/icons/hamburger.svg';

/**
 * @param {{number:int}} props
 * @returns {string}
 */
function Menu({ number }) {
  return html`
    <header class="menu">
      <nav class="menu__nav">
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <img src="${HamburgerIcon}" alt="Hamburger Icon" />
        </label>
        <div class="menu__container-logo">
          <img menu="menu__logo" src=${ApikachuLogo} alt="Logo" />
        </div>
        <ul class="menu__list">
          <li class="menu__item">
            <span class="menu__icon"
              ><img src=${UserIcon} alt="User icon" /></span
            ><a class="menu__link" href="#">Sign In | Sign Up</a>
          </li>
          <li class="menu__item">
            <span class="menu__icon"
              ><img src=${WishIcon} alt="Wish icon" /></span
            ><a class="menu__link" href="#">My Wish List${number}</a>
          </li>
          <li class="menu__item">
            <span class="menu__icon"><img src=${BagIcon} alt="Bag icon" /></span
            ><a class="menu__link" href="#">My Bag${number}</a>
          </li>
          <li class="menu__item"><a class="menu__link" href="#">Shop</a></li>
          <li class="menu__item">
            <a class="menu__link" href="#">Hot sell</a>
          </li>
        </ul>
        <div class="menu__icons-container">
          <img class="menu__icon-item" src=${WishIcon} alt="User icon" />
          <img class="menu__icon-item" src=${BagIcon} alt="User icon" />
          <img class="menu__icon-item" src=${VectorIcon} alt="User icon" />
        </div>
      </nav>
      <div class="menu__secondary">
        <p class="menu__secondary-text">Store</p>
        <p class="menu__secondary-text">Hot sell</p>
      </div>
      <button class="buton btn btn--buy btn--big">Shop Now</button>
    </header>
  `;
}

export default Menu;
