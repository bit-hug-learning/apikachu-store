module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  globals: {
    html: true,
  },
  rules: {
    'no-plusplus': 'off',
    eqeqeq: 'off',
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-syntax': 'off',
    'import/no-named-as-default-member': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'lf',
        semi: true,
        singleQuote: true,
        tabWidth: 2,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  ignorePatterns: ['build/**/*'],
};
