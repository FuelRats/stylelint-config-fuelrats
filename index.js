module.exports = {
  extends: [
    './rules/core/errors',
    './rules/core/limitfeatures',
    './rules/core/style',
    './rules/plugin/scss',
    './rules/plugin/order',
  ],
  customSyntax: 'postcss-scss',
}
