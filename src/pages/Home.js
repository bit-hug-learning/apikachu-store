import Filter from 'components/Filter';
import Hero from 'components/Hero';

const Home = () => html` ${Hero()} ${Filter()} `;

Home.afterRender = () => {
  Filter.afterRender();
};

export default Home;
