import './styles/main.scss';
import Footer from './components/Footer';
import { getPokemonByRange } from './utils/fetchData';
import Filter from './components/Filter';

document.body.innerHTML = Filter();

async function a() {
  const s = await getPokemonByRange(1, 4);
  console.log(s);
}

a();
