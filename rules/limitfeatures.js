const kebabCasePattern = /^[a-z]{2,}(-[a-z]{2,})*$/u
const pascalCasePattern = /^([A-Z][a-z]{1,})+$/u





module.exports = {
  rules: {
    // Require (where possible) or disallow named colors.
    'color-named': 'never',

    // Disallow hex colors.
    'color-no-hex': null,

    // Specify a blacklist of disallowed functions.
    'function-blacklist': null,

    // Specify a whitelist of allowed functions.
    'function-whitelist': null,

    // Disallow scheme-relative urls.
    'function-url-no-scheme-relative': true,

    // Specify a blacklist of disallowed URL schemes.
    'function-url-scheme-blacklist': null,

    // Specify a whitelist of allowed URL schemes.
    'function-url-scheme-whitelist': ['data', 'blob', 'https'],

    // Specify a pattern for keyframe names.
    'keyframes-name-pattern': kebabCasePattern,

    // Limit the number of decimal places allowed in numbers.
    'number-max-precision': 4,

    // Specify the minimum number of milliseconds for time values.
    'time-min-milliseconds': null,

    // Specify a blacklist of disallowed units.
    'unit-blacklist': null,

    // Specify a whitelist of allowed units.
    'unit-whitelist': [
      'px', // Pixels
      'em', // Font Size relative to element
      'rem', // Font Size relative to root element
      'vw', // View Width
      'vh', // View Height
      '%', // Percent
    ],

    // Disallow redundant values in shorthand properties (Autofixable).
    'shorthand-property-no-redundant-values': true,

    // Disallow vendor prefixes for values.
    'value-no-vendor-prefix': true,

    // Specify a pattern for custom properties.
    'custom-property-pattern': kebabCasePattern,

    // Specify a blacklist of disallowed properties.
    'property-blacklist': null,

    // Specify a whitelist of allowed properties.
    'property-whitelist': null,

    // Disallow vendor prefixes for properties (which are supported by AutoPrefixer).
    'property-no-vendor-prefix': true,

    // Disallow longhand properties that can be combined into one shorthand property.
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: [/flex-/u],
      },
    ],

    // Disallow !important within declarations.
    'declaration-no-important': true,

    // Specify a blacklist of disallowed property and unit pairs within declarations.
    'declaration-property-unit-blacklist': null,

    // Specify a whitelist of allowed property and unit pairs within declarations.
    'declaration-property-unit-whitelist': null,

    // Specify a blacklist of disallowed property and value pairs within declarations.
    'declaration-property-value-blacklist': null,

    // Specify a whitelist of allowed property and value pairs within declarations.
    'declaration-property-value-whitelist': null,

    // Limit the number of declarations within a single-line declaration block.
    'declaration-block-single-line-max-declarations': 1,

    // Specify a blacklist of disallowed attribute operators.
    'selector-attribute-operator-blacklist': null,

    // Specify a whitelist of allowed attribute operators.
    'selector-attribute-operator-whitelist': null,

    // Specify a pattern for class selectors.
    'selector-class-pattern': kebabCasePattern,

    // Specify a blacklist of disallowed combinators.
    'selector-combinator-blacklist': null,

    // Specify a whitelist of allowed combinators.
    'selector-combinator-whitelist': null,

    // Specify a pattern for ID selectors.
    'selector-id-pattern': pascalCasePattern,

    // Limit the number of attribute selectors in a selector.
    'selector-max-attribute': null,

    // Limit the number of classes in a selector.
    'selector-max-class': null,

    // Limit the number of combinators in a selector.
    'selector-max-combinators': null,

    // Limit the number of compound selectors in a selector.
    'selector-max-compound-selectors': null,

    // Limit the number of adjacent empty lines within selectors (Autofixable).
    'selector-max-empty-lines': 0,

    // Limit the number of ID selectors in a selector.
    'selector-max-id': null,

    // Limit the number of pseudo-classes in a selector.
    'selector-max-pseudo-class': null,

    // Limit the specificity of selectors.
    'selector-max-specificity': null,

    // Limit the number of type in a selector.
    'selector-max-type': null,

    // Limit the number of universal selectors in a selector.
    'selector-max-universal': null,

    // Specify a pattern for the selectors of rules nested within rules.
    'selector-nested-pattern': null,

    // Disallow qualifying a selector by type.
    'selector-no-qualifying-type': null,

    // Disallow vendor prefixes for selectors (which are supported by AutoPrefixer).
    'selector-no-vendor-prefix': true,

    // Specify a blacklist of disallowed pseudo-class selectors.
    'selector-pseudo-class-blacklist': null,

    // Specify a whitelist of allowed pseudo-class selectors.
    'selector-pseudo-class-whitelist': null,

    // Specify a blacklist of disallowed pseudo-element selectors.
    'selector-pseudo-element-blacklist': null,

    // Specify a whitelist of allowed pseudo-element selectors.
    'selector-pseudo-element-whitelist': null,

    // Specify a blacklist of disallowed media feature names.
    'media-feature-name-blacklist': null,

    // Specify a whitelist of allowed media feature names.
    'media-feature-name-whitelist': null,

    // Disallow vendor prefixes for media feature names.
    'media-feature-name-no-vendor-prefix': null,

    // Specify a whitelist of allowed media feature name and value pairs.
    'media-feature-name-value-whitelist': null,

    // Specify a pattern for custom media query names.
    'custom-media-pattern': kebabCasePattern,

    // Specify a blacklist of disallowed at-rules.
    'at-rule-blacklist': null,

    // Specify a whitelist of allowed at-rules.
    'at-rule-whitelist': null,

    // Disallow vendor prefixes for at-rules.
    'at-rule-no-vendor-prefix': true,

    // Specify a requirelist of properties for an at-rule.
    'at-rule-property-requirelist': {
      'font-face': [
        'font-display',
        'font-family',
        'font-style',
        'font-weight',
        'src',
      ],
      keyframes: [
        'from',
        'to',
      ],
    },

    // Specify a blacklist of disallowed words within comments.
    'comment-word-blacklist': null,

    // Limit the depth of nesting.
    'max-nesting-depth': null,

    // Disallow unknown animations.
    'no-unknown-animations': null,
  },
}
