/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'plugin:import/react',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['eslint-plugin-react-compiler'],
  rules: {
    // https://github.com/facebook/react/tree/main/compiler/packages/eslint-plugin-react-compiler
    'react-compiler/react-compiler': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/display-name': ['off', { ignoreTranspilerName: false }],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
    'react/button-has-type': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': ['error', 'never'],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 'off',
  },
}
