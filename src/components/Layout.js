import Footer from './Footer';
import { Menu } from './Menu';

const Layout = () => html`
  ${Menu( {number: 0} )}
  <main id="mainContent"></main>
  ${Footer()}
`;

export default Layout;
