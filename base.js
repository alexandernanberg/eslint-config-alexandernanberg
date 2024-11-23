// @ts-check
/// <reference types="./types.d.ts" />

import eslint from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,ts,tsx}'],
    plugins: {
      import: importPlugin,
    },
    rules: {
      // require let or const instead of var
      // https://eslint.org/docs/rules/no-var
      'no-var': 'error',

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

      // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/__test__/**',
            '**/__tests__/**',
            '**/test.{js,ts,tsx}',
            '**/*.test.{js,ts,tsx}',
            '**/.storybook/**',
            '**/stories/**',
            '**/*.stories.{js,ts,tsx}',
            '**/*.story.{js,ts,tsx}',
            '**/jest.setup.{js,ts}',
            '**/setupTests.js',
            '**/webpack.*.{js,ts}',
            '**/rollup.*.{js,ts}',
            '**/babel.*.js',
            '**/*.config.*',
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

      // https://github.com//blob/main/docs/rules/consistent-type-specifier-style.md
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [...tseslint.configs.recommendedTypeChecked],
    rules: {
      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-imports.mdx
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],

      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-object-type.mdx
      '@typescript-eslint/no-empty-object-type': [
        'error',
        { allowInterfaces: 'always' },
      ],

      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-interface.mdx
      '@typescript-eslint/no-empty-interface': 'off',

      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-promises.mdx
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } },
      ],

      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-shadow.mdx
      '@typescript-eslint/no-shadow': 'error',

      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-condition.mdx
      '@typescript-eslint/no-unnecessary-condition': 'error',

      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-vars.mdx
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    linterOptions: { reportUnusedDisableDirectives: 'warn' },
    languageOptions: {
      parserOptions: {
        projectService: true,
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
  },
)
