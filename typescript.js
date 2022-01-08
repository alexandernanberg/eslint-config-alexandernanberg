module.exports = {
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      rules: {
        //https://github.com/typescript-eslint/typescript-eslint/issues/2483
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
      },
    },
    {
      files: ['*.test.ts', '*.test.tsx'],
      rules: {
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
        '@typescript-eslint/explicit-function-return-type': 0,
      },
    },
  ],
}
