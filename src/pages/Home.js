import Filter from 'components/Filter';
import Hero from 'components/Hero';
import Pagination from 'components/Pagination';

const Home = () =>
  html` ${Hero()} ${Pagination()} ${Filter()} ${Pagination()} `;

Home.afterRender = () => {
  Filter.afterRender();
  Pagination.afterRender();
};

export default Home;
