// images of pokemon types
import normalImg from 'assets/images/type_normal.png';
import bugImg from 'assets/images/type_bug.png';
import darkImg from 'assets/images/type_dark.png';
import dragonImg from 'assets/images/type_dragon.png';
import electricImg from 'assets/images/type_electric.png';
import fairyImg from 'assets/images/type_fairy.png';
import fightingImg from 'assets/images/type_fighting.png';
import fireImg from 'assets/images/type_fire.png';
import ghostImg from 'assets/images/type_ghost.png';
import grassImg from 'assets/images/type_grass.png';
import groundImg from 'assets/images/type_ground.png';
import iceImg from 'assets/images/type_ice.png';
import poisonImg from 'assets/images/type_poison.png';
import psychicImg from 'assets/images/type_psychic.png';
import rockImg from 'assets/images/type_rock.png';
import steelImg from 'assets/images/type_steel.png';
import waterImg from 'assets/images/type_water.png';
import flyingImg from 'assets/images/type_flying.png';

const pokemonTypes = {
  normal: {
    name: 'Normal',
    image: normalImg,
    color: 'var(--color-type-gray)',
  },
  flying: {
    name: 'Flying',
    image: flyingImg,
    color: 'var(--color-type-blue-light)',
  },
  dark: {
    name: 'Dark',
    image: darkImg,
    color: 'var(--color-type-gray-dark)',
  },
  steel: {
    name: 'Steel',
    image: steelImg,
    color: 'var(--color-type-gray)',
  },
  bug: {
    name: 'Bug',
    image: bugImg,
    color: 'var(--color-type-green-dark)',
  },
  grass: {
    name: 'Grass',
    image: grassImg,
    color: 'var(--color-type-green)',
  },
  electric: {
    name: 'Electric',
    image: electricImg,
    color: 'var(--color-type-yellow)',
  },
  rock: {
    name: 'Rock',
    image: rockImg,
    color: 'var(--color-type-gray-dark)',
  },
  ground: {
    name: 'Ground',
    image: groundImg,
    color: 'var(--color-type-yellow-dark)',
  },
  fire: {
    name: 'Fire',
    image: fireImg,
    color: 'var(--color-type-red)',
  },
  fighting: {
    name: 'Fighting',
    image: fightingImg,
    color: 'var(--color-type-red-dark)',
  },
  ghost: {
    name: 'Ghost',
    image: ghostImg,
    color: 'var(--color-type-blue-dark)',
  },
  water: {
    name: 'Water',
    image: waterImg,
    color: 'var(--color-type-blue)',
  },
  ice: {
    name: 'Ice',
    image: iceImg,
    color: 'var(--color-type-blue-light)',
  },
  dragon: {
    name: 'Dragon',
    image: dragonImg,
    color: 'var(--color-type-blue-dark)',
  },
  poison: {
    name: 'Poison',
    image: poisonImg,
    color: 'var(--color-type-purple)',
  },
  psychic: {
    name: 'Psychic',
    image: psychicImg,
    color: 'var(--color-type-purple-dark)',
  },
  fairy: {
    name: 'Fairy',
    image: fairyImg,
    color: 'var(--color-type-purple-light)',
  },
};

export const typesList = (() =>
  Object.keys(pokemonTypes).map((id) => ({
    id,
    ...pokemonTypes[id],
  })))();

export default pokemonTypes;
