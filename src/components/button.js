import '../styles/components/button.scss'; // import styles in each component

function html(str, ...labels) {
  return str
    .map((a, i) => {
      if (typeof labels[i] === 'undefined') return a;
      if (Array.isArray(labels[i])) return a + labels[i].join('');
      if (typeof labels[i] === 'object')
        throw new Error('cannot pass an object:');
      return a + labels[i];
    })
    .join('');
}

/**
 * A component should return a string with the html
 *
 * @param {{name:string}} props
 * @returns {string}
 */
function Button({ name }) {
  return html`
    <div class="g">
      <div class="g">
        <div class="aa"><a href="">${name}</a></div>
        <p>${{ a: '4' }}</p>
      </div>
    </div>
  `;
}

var a = html` <div class="a"></div> `;

export default Button; // exports the function as default
