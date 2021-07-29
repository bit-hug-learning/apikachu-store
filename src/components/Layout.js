import Footer from './Footer';
import { Menu, openShopCart } from './Menu';
import { Hero, shopCartHero } from './Hero';
import { getPokemonByRange } from 'utils/fetchData';
import { setAllPokemons } from 'context/actions';

const Layout = () => html`
  ${Menu( {number: 0} )}
  <main id="mainContent"></main>
  ${Footer()}
`;

Layout.afterRender = async () => {
  Menu.afterRender();
  openShopCart();
  const pokemons = await getPokemonByRange(1, 151);
  setAllPokemons(pokemons);
}

export default Layout;
