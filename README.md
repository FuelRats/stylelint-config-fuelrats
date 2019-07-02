# @fuelrats/stylelint-config

* Base Stylelint ruleset with various other helpful plugins.
    * Assumes project uses SCSS.
    * Includes [`stylelint-scss`][stylelint-scss] for additional SCSS linting.
    * Includes [`stylelint-order`][stylelint-order] for enforcing properly strucutred declarations.





## Setup
1. There are 2 recommended ways to install this config.
    * `npx install-peerdeps @fuelrats/stylelint-config`
    * or `yarn add stylelint stylelint-scss stylelint-order @fuelrats/stylelint-config`
2. Add `"extends": ["@fuelrats/stylelint-config"],` to your `.stylelintrc` file.





[stylelint-scss]: https://www.npmjs.com/package/stylelint-scss
[stylelint-order]: https://www.npmjs.com/package/stylelint-order
