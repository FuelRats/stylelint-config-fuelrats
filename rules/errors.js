module.exports = {
  rules: {
    // Disallow invalid hex colors.
    'color-no-invalid-hex': [true],

    // Disallow duplicate font family names.
    'font-family-no-duplicate-names': [true],

    // Disallow missing generic families in lists of font family names.
    'font-family-no-missing-generic-family-keyword': [true],

    // Disallow an invalid expression within calc functions.
    'function-calc-no-invalid': [true],

    // Disallow an unspaced operator within calc functions.
    'function-calc-no-unspaced-operator': [true],

    // Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
    'function-linear-gradient-no-nonstandard-direction': [true],

    // Disallow (unescaped) newlines in strings.
    'string-no-newline': [true],

    // Disallow unknown units.
    'unit-no-unknown': [true],

    // Disallow unknown properties.
    'property-no-unknown': [true, {
      checkPrefixed: true,
    }],

    // Disallow !important within keyframe declarations.
    'keyframe-declaration-no-important': [true],

    // Disallow duplicate properties within declaration blocks.
    'declaration-block-no-duplicate-properties': [true],

    // Disallow shorthand properties that override related longhand properties.
    'declaration-block-no-shorthand-property-overrides': [true],

    // Disallow empty blocks.
    'block-no-empty': [true],

    // Disallow unknown pseudo-class selectors.
    'selector-pseudo-class-no-unknown': [true],

    // Disallow unknown pseudo-element selectors.
    'selector-pseudo-element-no-unknown': [true],

    // Disallow unknown type selectors.
    'selector-type-no-unknown': [true],

    // Disallow unknown media feature names.
    'media-feature-name-no-unknown': [true],

    // Disallow unknown at-rules.
    'at-rule-no-unknown': null,

    // Disallow empty comments.
    'comment-no-empty': [true],

    // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
    'no-descending-specificity': null,

    // Disallow duplicate @import rules within a stylesheet.
    'no-duplicate-at-import-rules': [true],

    // Disallow duplicate selectors within a stylesheet.
    'no-duplicate-selectors': [true],

    // Disallow empty sources.
    'no-empty-source': [true],

    // Disallow extra semicolons (Autofixable).
    'no-extra-semicolons': [true],

    // Disallow double-slash comments (//...) which are not supported by CSS.
    'no-invalid-double-slash-comments': [true],
  },
}
