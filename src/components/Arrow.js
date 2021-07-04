const Arrow = ({ direction = 'right' } = {}) => {
  const degrees = {
    left: 180,
    up: 270,
    right: 0,
    down: 90,
  };

  return html`
    <svg
      width="9"
      height="12"
      viewBox="0 0 9 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style="transform:rotate(${degrees[direction]}deg)"
    >
      <path
        d="M0.840027 1.41L5.42003 6L0.840027 10.59L2.25003 12L8.25003 6L2.25003 0L0.840027 1.41Z"
        fill="#C4CDD5"
      />
    </svg>
  `;
};
export default Arrow;
