import './styles/general/main.scss'; // general styles
import DetailPage from 'pages/DetailPage';
import Layout from 'components/Layout';
import NotFound from 'pages/NotFound';
import router from './router';
import Home from './pages/Home';

const routes = [
  { path: '/', component: Home },
  { path: '/detail/:pokemonId/', component: DetailPage },
];

router.init({
  routes,
  appContainer: '#app',
  layout: {
    component: Layout,
    main: '#mainContent',
  },
  notFound: NotFound,
});
