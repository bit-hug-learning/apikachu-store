const Pagination = ({ source, onChange }) => {
  const pages = [source[0], , source[source.length - 1]];

  return html`
    <div class="pagination">
      <button class="pagination__prev"></button>
      ${pages.map(
        (page) =>
          html`<button
            class="pagination__section"
            ${page === '...' ? 'disabled' : ''}
          >
            ${page}
          </button>`
      )}
      <button class="pagination__next"></button>
    </div>
  `;
};

export default Pagination;
