/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    // disallow expressions where the operation doesn't affect the value
    // https://eslint.org/docs/rules/no-constant-binary-expression
    'no-constant-binary-expression': 'error',

    // require let or const instead of var
    // https://eslint.org/docs/rules/no-var
    'no-var': 'error',

    // disallow declaration of variables already declared in the outer scope
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'error',

    // disallow declaration of variables that are not used in the code
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],

    // require method and property shorthand syntax for object literals
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],

    // suggest using of const declaration for variables that are never modified after declared
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],

    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': 'warn',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/test/**',
          '**/tests/**',
          '**/test.{js,ts,tsx}',
          '**/*.test.{js,ts,tsx}',
          '**/spec/**',
          '**/specs/**',
          '**/spec.{js,ts,tsx}',
          '**/*.spec.{js,ts,tsx}',
          '**/cypress/**',
          '**/.storybook/**',
          '**/stories/**',
          '**/*.stories.{js,ts,tsx}',
          '**/*.story.{js,ts,tsx}',
          '**/jest.setup.{js,ts}',
          '**/setupTests.js',
          '**/webpack.*.{js,ts}',
          '**/rollup.*.{js,ts}',
          '**/babel.*.js',
        ],
      },
    ],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
    'import/namespace': ['error', { allowComputed: true }],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'error',
      { groups: [['builtin', 'external', 'internal']] },
    ],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
    'import/no-cycle': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': 'error',
  },
}
