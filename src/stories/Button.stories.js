import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    name: { control: 'text' },
  },
};

export const Primary = Button.bind({}); // this line makes a copy of the "Button" function
Primary.args = {
  name: 'Primary button',
};

export const Buy = Button.bind({});
Buy.args = {
  name: 'Buy',
};
