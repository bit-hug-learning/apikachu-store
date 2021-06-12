import './styles/main.scss';
import Footer from './components/Footer';
import { getPokemonByRange } from './utils/fetchData';

document.body.innerHTML = Footer({});

async function a() {
  const s = await getPokemonByRange(1, 4);
  console.log(s);
}

a();
