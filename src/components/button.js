import '../styles/components/button.scss'; // import styles in each component

/**
 * A component should return a string with the html
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
