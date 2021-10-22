const readPkgUp = require('read-pkg-up')

let hasJestDom = false
let hasTestingLibrary = false

try {
  const { packageJson } = readPkgUp.sync({ normalize: true })
  const allDeps = Object.keys({
    ...packageJson.peerDependencies,
    ...packageJson.devDependencies,
    ...packageJson.dependencies,
  })

  hasJestDom = allDeps.includes('@testing-library/jest-dom')
  hasTestingLibrary = allDeps.includes('@testing-library/react')
} catch (error) {
  // ignore error
}

module.exports = {
  extends: [
    // https://github.com/jest-community/eslint-plugin-jest
    'plugin:jest/recommended',
    // https://github.com/testing-library/eslint-plugin-jest-dom
    hasJestDom && 'plugin:jest-dom/recommended',
    // https://github.com/testing-library/eslint-plugin-testing-library
    hasTestingLibrary && 'plugin:testing-library/react',
  ].filter(Boolean),
  env: {
    jest: true,
  },
  rules: {
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['expect', 'expect*'],
      },
    ],
  },
}
