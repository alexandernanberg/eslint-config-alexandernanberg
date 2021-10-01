module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb'),
    require.resolve('eslint-config-prettier'),
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  plugins: ['prettier', 'react-hooks'],
  env: {
    browser: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
    'prettier/prettier': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': 'off',
  },
}
