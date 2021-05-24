import '../styles/components/button.scss'; // import styles in each component

/**
 * A component should return an string with the html
 * it can receive props, recomend to pass it in an object and using destructure in the params
 *
 * @param {{name:string}} props
 * @returns {string}
 */
function Button({ name }) {
  return `
    <button class="btn">${name}</button>
  `;
}

export default Button; // exports the function as default
