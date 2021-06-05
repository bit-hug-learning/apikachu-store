import "../styles/components/menu.scss";
import UserIcon from "../assets/icons/user_icon.svg";
import WishIcon from "../assets/icons/wish_icon.svg";
import BagIcon from "../assets/icons/bag_icon.svg";
import VectorIcon from "../assets/icons/Vector.svg";
/**
 * A component should return a string with the html
 *
 * @param {{number:int}} props
 * @returns {int}
 */

function Menu({ number }) {
  return `
  <header>
    <img src="../assets/images/apikachuStoreLogo.png" />
    <nav>
      <ul>
        <li><span><img src=${UserIcon} alt="User icon" /></span><a href="#">Sign In | Sign Up</a></li>
        <li><span><img src=${WishIcon} alt="Wish icon" /></span><a href="#">My Wish List${number}</a></li>
        <li><span><img src=${BagIcon} alt="Bag icon" /></span><a href="#">My Bag${number}</a></li>
        <li><img src=${VectorIcon} alt="Vector icon" /></li>
      </ul>
    </nav>
    <div>
      <p>Store</p>
      <p>Hot sell</p>
    </div>
    <button>Shop Now</button>
  </header>
  `;
}

export default Menu;
