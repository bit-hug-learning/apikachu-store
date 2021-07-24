import '../styles/components/menu.scss';
import ApikachuLogo from '../assets/images/apikachuStoreLogo.png';
import UserIcon from '../assets/icons/user_icon.svg';
import WishIcon from '../assets/icons/wish_icon.svg';
import BagIcon from '../assets/icons/bag_icon.svg';
import VectorIcon from '../assets/icons/Vector.svg';
import HamburgerIcon from '../assets/icons/hamburger.svg';
import { counter } from '../components/Card';
import Button from '../components/Button';
import { getPokemon } from 'utils/fetchData';
import { ShoppingItem, shopping } from 'components/ShoppingItem';
import store from 'context/index';
import {Hero} from './Hero'

/**
 * @param {{number:int}} props
 * @returns {string}
 */
function Menu({ number }) {
  return html`
    <header class="menu">
      <div class="menu__shopping-cart">
        <span class="menu__shopping-cart-close"></span>
        <p class="menu__shopping-title">Shopping Cart</p>
        <p class="menu__shopping-empty-msg">Your cart is empty</p>
        <div class="menu__shopping-items-container">
        </div>
        <div class="menu__shop-buttons">
          ${Button('Continue shopping', 'btn btn--primary', false)}
          ${Button('Checkout now', 'btn btn--buy', false)}
        </div>
      </div>
      <nav class="menu__nav">
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <img src="${HamburgerIcon}" alt="Hamburger Icon" />
        </label>
        <div class="menu__container-logo">
          <a href="/" data-link>
            <img
              menu="menu__logo"
              src=${ApikachuLogo}
              alt="Logo"
              width="180px"
              height="57px"
            />
          </a>
        </div>
        <ul class="menu__list">
          <li class="menu__item menu__home">
            <a class="menu__link" href="/" data-link
              >Home<span class="menu__icon item__home"
                ><img src=${ApikachuLogo} alt="Apikachu logo" /></span
            ></a>
          </li>
          <li class="menu__item">
            <span class="menu__icon"
              ><img src=${UserIcon} alt="User icon" /></span
            ><a class="menu__link">Sign In | Sign Up</a>
          </li>
          <li class="menu__item">
            <span class="menu__icon"
              ><img src=${WishIcon} alt="Wish icon" /></span
            ><a class="menu__link"
              >My Wish List <span class="menu__wish-value">${number}</span>
            </a>
          </li>
          <li class="menu__item menu__item--bag">
            <span class="menu__icon"><img src=${BagIcon} alt="Bag icon" /></span
            ><a class="menu__link"
              >My Bag <span class="menu__bag-value">${number} </span>
            </a>
          </li>
          <li class="menu__item"><a class="menu__link">Shop</a></li>
          <li class="menu__item">
            <a class="menu__link">Hot sell</a>
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

Menu.afterRender = async () => {
  store.subscribe((state) => {
    const fav = state.favorites.length;
    const cart = state.cart.length;

    const wishItemValue = document.querySelector('.menu__wish-value');
    wishItemValue.innerHTML = fav;

    const bagItemValue = document.querySelector('.menu__bag-value');
    bagItemValue.innerHTML = cart;

    const itemsContainer = document.querySelector(
      '.menu__shopping-items-container'
    );

    const initialMsg = document.querySelector('.menu__shopping-empty-msg');
    if (cart > 0) {
      initialMsg.innerHTML = `<div>Picture</div>
        <div>Name</div>
        <div>Price</div>
        <div style="width: 10px"></div>
      `;

      const pokemons = state.allPokemons.filter(pokemon=> state.cart.includes(pokemon.id))
      
      itemsContainer.innerHTML = '';

      pokemons.forEach(pokemon=>{
        const item = document.createElement("div");
        item.innerHTML = ShoppingItem(pokemon);
        itemsContainer.appendChild(item);
      })

      ShoppingItem.afterRender(counter);
    }
  });
};

const shopCart = () => {
  //to open the shopcart modal:
  const shoppingCartButton = document.querySelector('.menu__item--bag');
  const shopNowButton = document.querySelector(".buton");
  // console.log(shopNowButton);
  const shoppingModal = document.querySelector('.menu__shopping-cart');
  //to open the shopcart modal:
  const closeIcon = document.querySelector('.menu__shopping-cart-close');
  const continueButton = document.querySelector('.menu__shop-buttons');

  shoppingCartButton.addEventListener('click', () => {
    shoppingModal.classList.toggle('is-active');
  });

  shopNowButton.addEventListener('click', () => {
    shoppingModal.classList.toggle('is-active');
  });

  closeIcon.addEventListener('click', () => {
    if (shoppingModal.classList.contains('is-active')) {
      shoppingModal.classList.remove('is-active');
    }
  });

  continueButton.addEventListener('click', () => {
    if (shoppingModal.classList.contains('is-active')) {
      shoppingModal.classList.remove('is-active');
    }
  });

};


export { Menu, shopCart };
