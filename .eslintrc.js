module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: [
    '@fuelrats/eslint-config/rules/bestpractices',
    '@fuelrats/eslint-config/rules/errors',
    '@fuelrats/eslint-config/rules/es6',
    '@fuelrats/eslint-config/rules/node',
    '@fuelrats/eslint-config/rules/style',
    '@fuelrats/eslint-config/rules/variables',
  ],
  parserOptions: {
    codeFrame: true,
    ecmaVersion: 2018,
    sourceType: 'module',
  },
}
