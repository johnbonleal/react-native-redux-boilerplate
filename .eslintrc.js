module.exports = {
  env: {
    "es6": true,
    "node": true,
    "jest/globals": true,
  },
  extends: [
    "@react-native-community",
    "airbnb-typescript",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:import/typescript"
  ],
  globals: {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  plugins: [
    "react",
    "jest",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      "babel-module": {}
    }
  },
  rules: {
    'react/jsx-filename-extension': [
      2,
      {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    ],
    'import/no-extraneous-dependencies': [
      2,
      {devDependencies: ['**/test.tsx', '**/test.ts']},
    ],
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never'
      }
    ],
  },
};
