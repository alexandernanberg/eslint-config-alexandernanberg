import reactPlugin from 'eslint-plugin-react'
import hooksPlugin from 'eslint-plugin-react-hooks'
import reactCompilerPlugin from 'eslint-plugin-react-compiler'

/** @type {Awaited<import('typescript-eslint').Config>} */
export default [
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': hooksPlugin,
      'react-compiler': reactCompilerPlugin,
    },
    rules: {
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...hooksPlugin.configs.recommended.rules,
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
      'react/self-closing-comp': 'error',
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
      'react/jsx-boolean-value': ['error', 'never'],
      // https://github.com/facebook/react/tree/main/compiler/packages/eslint-plugin-react-compiler
      'react-compiler/react-compiler': 'error',
    },
  },
]
