import { CARDS_PER_PAGE } from 'config';
import { setPagination } from 'context/actions';
import store from 'context/index';
import 'styles/components/pagination.scss';
import Arrow from './Arrow';

const PaginationButtons = ({ numberOfPages, current }) => {
  let pages = []
  if (numberOfPages >= 5) {
    pages = [1, 2, 3, '...', numberOfPages];

    if (current > 3) pages = [1, '...', current, '...', numberOfPages];

    if (current > numberOfPages - 3) {
      pages = [1, '...', numberOfPages - 2, numberOfPages - 1, numberOfPages];
    }
  } else {
    for(let i = 1; i <= numberOfPages; i++) {
      pages.push(i);
    }
  }

  return html`
    <button
      class="pagination__prev"
      data-pagination="${current - 1}"
      ${current === 1 ? 'disabled' : ''}
    >
      ${Arrow({ direction: 'left' })}
    </button>
    ${pages
      .map(
        (page) =>
          html`<button
            class="pagination__section ${page === current ? 'active' : ''}"
            data-pagination="${page}"
          >
            ${page}
          </button>`
      )
      .join('')}
    <button
      class="pagination__next"
      data-pagination="${current + 1}"
      ${current === numberOfPages ? 'disabled' : ''}
    >
      ${Arrow()}
    </button>
  `;
};

const changePage = () => {
  const buttons = document.querySelectorAll('[data-pagination]');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const page = parseInt(button.dataset.pagination, 10);
      if (page) setPagination(page);
    });
  });
};

const renderButtons = (current) => {
  const { filteredPokemons } = store.get();
  const paginations = document.querySelectorAll('.pagination');
  paginations.forEach((pagination) => {
    pagination.innerHTML = PaginationButtons({
      numberOfPages: Math.ceil(filteredPokemons.length / CARDS_PER_PAGE),
      current,
    });

    changePage();
  });
};

const Pagination = () => html` <div class="pagination"></div> `;

Pagination.afterRender = () => {
  renderButtons(store.get().pagination);

  store.subscribe((state) => {
    renderButtons(state.pagination);
  });
};

export default Pagination;
