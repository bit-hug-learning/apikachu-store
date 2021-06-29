const Button = ({ textButton = 'Button', className, big, disabled }) => `
    <button class="${className} ${big ? ' btn--big' : ''}" 
    ${disabled ? 'disabled' : ''}>
      ${textButton} 
    </button>
  `;

export default {
  title: 'General/Button',
  argTypes: {
    className: { control: 'text' },
    big: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Default = Button.bind({});
Default.args = {
  className: 'btn',
};

export const Primary = Button.bind({});
Primary.args = {
  className: 'btn btn--primary',
};

export const Buy = Button.bind({});
Buy.args = {
  className: 'btn btn--buy',
};

export const Add = Button.bind({});
Add.args = {
  textButton: 'Add to cart',
  className: 'btn btn--add',
};

export const Big = Button.bind({});
Big.args = {
  className: 'btn btn--primary btn--big',
  big: true,
};

export const Disabled = Button.bind({});
Disabled.args = {
  className: 'btn btn--primary',
  disabled: true,
};
