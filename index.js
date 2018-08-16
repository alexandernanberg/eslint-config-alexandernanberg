module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb'),
    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-prettier/react'),
  ],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  env: {
    browser: true,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'react/destructuring-assignment': ['off'],
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/sort-comp': [
      'off',
      {
        order: [
          'static-methods',
          'constructor',
          'instance-variables',
          'lifecycle',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'state',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
  },
}
