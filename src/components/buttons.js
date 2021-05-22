import Button from './button';

function Buttons() {
  return `
  <h1>Buttons</h1>
  ${Button({ name: 'boton 1' })}
  ${Button({ name: 'Comprar' })}`;
}

export default Buttons;
