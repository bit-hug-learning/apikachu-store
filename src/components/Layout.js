import Footer from './Footer';
import { Menu, shopCart } from './Menu';

const Layout = () => html`
  ${Menu( {number: 0} )}
  <main id="mainContent"></main>
  ${Footer()}
`;

Layout.afterRender = () => {
  Menu.afterRender();
  shopCart();
}

export default Layout;
