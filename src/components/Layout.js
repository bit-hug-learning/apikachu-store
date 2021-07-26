import Footer from './Footer';
import { Menu, openShopCart } from './Menu';
import { Hero, shopCartHero } from './Hero';

const Layout = () => html`
  ${Menu( {number: 0} )}
  <main id="mainContent"></main>
  ${Footer()}
`;

Layout.afterRender = () => {
  Menu.afterRender();
  openShopCart();

}

export default Layout;
