import { main } from './Footer.stories';

const Button = ({ className, big, disabled }) => {
  return `
    <button class="${className} ${big ? ' btn--big' : ''}" 
    ${disabled ? 'disabled' : ''}>
      Button
    </button>
  `;
};

export default {
  title: 'General/Button',
  argTypes: {
    className: { control: 'text' },
    big: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Default = Button.bind({}); // this line makes a copy of the "Button" function
Default.args = {
  className: 'btn',
};

export const Primary = Button.bind({}); // this line makes a copy of the "Button" function
Primary.args = {
  className: 'btn btn--primary',
};

export const Buy = Button.bind({});
Buy.args = {
  className: 'btn btn--buy',
};

export const Big = Button.bind({}); // this line makes a copy of the "Button" function
Big.args = {
  className: 'btn btn--primary btn--big',
  big: true,
};

export const Disabled = Button.bind({}); // this line makes a copy of the "Button" function
Disabled.args = {
  className: 'btn btn--primary',
  disabled: true,
};
