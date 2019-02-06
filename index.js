module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb'),
    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-prettier/react'),
  ],
  parser: 'babel-eslint',
  plugins: ['prettier', 'react-hooks'],
  env: {
    browser: true,
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    // Depricated (remove when it's gone from airbnb's config)
    'jsx-a11y/label-has-for': 'off',
    // Maybe enable once it's less buggy
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    // Maybe enable once it works better with class fields
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
