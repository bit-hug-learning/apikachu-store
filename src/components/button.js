import '../styles/components/button.scss'; // import styles in each component

/**
 * A component should return a string with the html
 *
 * @param {{name:string}} props
 * @returns {string}
 */
const Button = ({ name }) => `
    <button class="btn">${name}</button>
  `;

function Button({ name }) {
  return;
}

export default Button; // exports the function as default
