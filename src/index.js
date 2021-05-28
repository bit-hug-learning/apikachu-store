import './styles/main.scss';
import Button from './components/button';
import Footer from './components/Footer';
import ApikachuLogo from './assets/images/apikachuStoreLogo.png'
import BitHugLogo from './assets/icons/BitHugLogo.png'

document.body.innerHTML = Footer({storeLogo: ApikachuLogo, usLogo: BitHugLogo})