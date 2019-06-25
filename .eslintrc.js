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
  rules: {
    'new-cap': ['error', {
      newIsCap: true,
      capIsNew: true,
      newIsCapExceptions: [],
      capIsNewExceptions: [
        'GET', // For HTTP methods
        'POST',
        'PUT',
        'DELETE',
        'Stripe', // For Stripe lib (which exists as window.Stripe)
      ],
      properties: true,
    }],

    'no-invalid-this': ['error'],

    'object-curly-spacing': ['error', 'always'],

    quotes: ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: false,
    }],

    semi: ['error', 'never', {
      beforeStatementContinuationChars: 'always',
    }],

    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTaggedTemplates: false,
      allowTernary: false,
    }],

    'valid-typeof': ['error'],
  },
  parserOptions: {
    codeFrame: true,
    ecmaVersion: 2018,
    sourceType: 'module',
  },
}
