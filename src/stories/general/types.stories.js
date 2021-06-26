import pokemonTypes from '../../pokemonTypes';

const AllTypes = () =>
  Object.keys(pokemonTypes)
    .map(
      (type) =>
        `<img style="margin-right:1rem" src="${pokemonTypes[type].image}" />`
    )
    .join('');

export default {
  title: 'General/Pokemon Types',
};

export const All = AllTypes.bind({});

export const ByTypeName = ({ type }) => /* html */ `
  <p>${pokemonTypes[type].name}</p>
  <img src="${pokemonTypes[type]?.image}" />
  <div style="background:${pokemonTypes[type].color}; width:50px; height: 50px"></div>
`;

ByTypeName.argTypes = {
  type: {
    options: Object.keys(pokemonTypes),
    control: { type: 'select' },
  },
};

ByTypeName.args = {
  type: 'normal',
};
