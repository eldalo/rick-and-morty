module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'import',
    'react',
    'react-hooks',
    'jsx-a11y',
    'prettier',
    'react-redux',
    'redux-saga',
  ],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:prettier/recommended',
    'plugin:react-redux/recommended',
    'plugin:redux-saga/recommended',
    'prettier',
    'prettier/react',
  ],
  rules: {
    'no-unused-vars': ['warn'],
    'react/prop-types': [0],
    'react/jsx-props-no-spreading': [0],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: true,
        tabWidth: 2,
        printWidth: 80,
        trailingComma: 'all',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
          '_resources',
          '_adapters',
        ],
      },
    ],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'redux-saga/no-unhandled-errors': 'off',
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true,
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
