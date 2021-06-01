const Button = ({ className }) => {
  return `
    <button class="${className}">Button</button>
  `;
};

export default {
  title: 'General/Button',
  argTypes: {
    className: { control: 'text' },
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
