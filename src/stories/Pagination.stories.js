import Pagination from '../components/Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

export const main = Pagination.bind({});
Pagination.afterRender();

main.args = {
  numberOfPages: 8,
  current: 1,
};
