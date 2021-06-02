import pokedexTop from '../assets/images/pokedex_top.svg';

function Stats(stats) {
  return stats
    .map((stat) => `<div>${stat.name} ${stat.base_stat}<div>`)
    .join('');
}
function Detail({ image, id, name, types = [], stats } = {}) {
  return /*html*/ `
    <img src=${pokedexTop}/>
    <img src="${image}" alt="" />
    <h2>#${id} ${name}</h2>
    <div>
      Type
      <img src="${types[0]?.image}" alt="${types[0]?.name}" />
      ${
        types[1]
          ? `<img src="${types[1]?.image}" alt="${types[1]?.name}" />`
          : ''
      }
      <div>
        <p>Stats</p>
        <div>
        ${Stats(stats)}
        </div>
      </div>
    </div>
  `;
}

export default Detail;
