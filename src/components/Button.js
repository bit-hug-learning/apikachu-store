import pokeball from '../assets/images/pokeball.png';

function Button(textButton, className, big, disabled) {
  return html`
    <button
      class="${className} ${big ? ' btn--big' : ''}"
      ${disabled ? 'disabled' : ''}
    >
      ${textButton == `Shop now`
        ? `${textButton}<img class="pokeball" src="${pokeball}"/>`
        : textButton}
    </button>
  `;
}

export default Button;