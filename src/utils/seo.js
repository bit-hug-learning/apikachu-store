const DEF_TITLE = 'Apikachu Store';
const DEF_DESC = 'The best pokemons store in the world';

export default function seo({ title, description } = {}) {
  document.title = title + ' | ' + DEF_TITLE;

  let metaDescription;
  metaDescription = document.querySelector('meta[name="description"]');

  if (metaDescription === null) {
    metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    document.head.appendChild(metaDescription);
  }

  metaDescription.content = description || DEF_DESC;
}
