<p align="center">
  <img src="https://i.imgur.com/Dtw886b.png">
</p>

# Lese

[![npm version](https://badge.fury.io/js/lese.svg)](https://badge.fury.io/js/lese)

Easy to use and lightweight layout framework for @emotion/styled.

Lese was inspired after using Laco, an extremely lightweight package for state management, with React. Lese's goal is to provide a powerful set of tools to quickly build layouts in emotion's styled components while being just under 2KBs in size when gzipped. The project is in early alpha so bugs and breaking API changes are to be expected between minor releases.

## To-Do

- [x] Base Components
- [x] Switch to @emotion/styled
- [ ] First Draft of Documentation
- [ ] API Review
- [ ] Convert to Typescript/Add type defintions
- [X] Convenience functions in helpers to reduce code size
- [ ] Other? Make an issue or PR to request changes

## Features

- 🔥 Extremely lightweight - <2KBs gzipped
- 📦 Out of the box support for Grid and Flex
- 🚀 Blazing fast development speed

## How It Works

All components (aside from image) inherit from the Base component which includes convienence props for responsive sizing, text modification, and sizing. The framework's goal is not to provide a layer of abstraction over the existing css properties (beyond x and yAlign) but rather to provide easy to use short hand properties.

> The more I use CSS Grid, the more convinced I am that there is no benefit to be had by adding a layer of abstraction over it. CSS Grid is the layout framework baked right into the browser - Jen Simmons

# API

## Base

Contains all of the base props for all other components aside from the image component. Possible prop values are as follows:

### Text
### `color: String`
Changes the color of the children
### `fontSize: String`
Changes the font size of the children
### `fontDecoration: String`
Changes the font decoration of the children
### `fontWeight: String`
Changes the font weight of the children

### Size
### `height: String`
Changes the height of the element. Note: By default, this will use the `height` css property. However, when responsive is enabled, the component will instead use `max-height: ${height}` and `height: 100%` to make the element responsive.

### `width: String`
Changes the width of the element. Note: By default, this will use the `width` css property. However, when responsive is enabled, the component will instead use `max-width: ${width}` and `width: 100%` to make the element responsive.

### `responsive: Boolean`
Modifies the width and height properties to use max-width and max-height to make the element responsive in situations where all the space to reach its maximum width is not avaliable.

### `padding: String`
Changes the padding of the element.

### `margin: String`
Changes the margin of the element.

### Layout
### `block: Boolean`
Short-hand property for applying `display: block`

### `inlineBlock: Boolean`
Short-hand property for applying `display: inline-block`

### `relative: Boolean`
Short-hand property for applying `position: relative`

### Cosmetic
### `border: String`
Changes the border of the element.

### `borderRadius: String`
Changes the border radius of the element.

### `background: String`
Changes the background of the element.

## Container

The quick and easy to use flex container. Inherits all properties from Base.

### `column: Boolean`
Sets the flex-direction to column

### `xAlign: Boolean | String`
Based on the column boolean, xAlign will automatically switch between justify-content (row) and align-items (column). Sets to "center" by default when set to `true`. Otherwise, it passes the string to the appropriate css property.

### `yAlign: Boolean | String`
Based on the column boolean, xAlign will automatically switch between align-items (row) and justify-content (column). Sets to "center" by default when set to `true`. Otherwise, it passes the string to the appropriate css property.

### `separation: String`
Based on the column boolean, separation will use margin-top (column) or margin-left (row) on its immediate children on all but the first child using `* + *`. The value of the string will be passed to the appropriate css property.

### `resetMargin: Boolean`
Resets the margins of the immediate children using `> * { margin: 0; }`.

### `wrap: Boolean | String`
Sets the flex-wrap css property. Defaults to "wrap" when set to `true`.

## Grid
🚨 Note: This API is still very incomplete and subject to change drastically. Many features are planned for quick auto columns and auto rows as well as support for arrays. For now, it is simply short hands and a few defaults.

### `columns: String`
Shorthand for `grid-template-columns`

### `rows: String`
Shorthand for `grid-template-rows`

### `autoColumns: String`
Shorthand for `grid-auto-columns`

### `autoRows: String`
Shorthand for `grid-auto-rows`

### `columnGap: String`
Shorthand for `grid-column-gap`

### `rowGap: String`
Shorthand for `grid-row-gap`

### `gap: String`
Shorthand for `grid-gap`

### `xAlign: Boolean | String`
Shorthand for `justify-items`. Defaults to `center` when set to true.

### `yAlign: Boolean | String`
Shorthand for `align-items`. Defaults to `center` when set to true.

### `align: Boolean | String`
Shorthand for `place-items`. Defaults to `center center` when set to true.

### `xAlignSelf: Boolean | String`
Shorthand for `justify-content`. Defaults to `center` when set to true.

### `yAlignSelf: Boolean | String`
Shorthand for `align-content`. Defaults to `center` when set to true.

### `alignSelf: Boolean | String`
Shorthand for `place-content`. Defaults to `center center` when set to true.

## Button
A simple button component with togglable hover effects.

### `color: String`
Sets the color of the button. Note: this must be set as a prop and will not be inherited. This is subject to change.

### `accent: String`
The accent color of the button. Applies to the background and border properties.

### `secondary: Boolean`
`false - Default`: Filled background with hover effect to transparent with border.
`true`: Border with hover effect to filled background.

### `wide: Boolean`
Sets the padding to `12px 36px` when set to true. Otherwise, the button will default to the padding prop or `12px 24px`

### `noHover: Boolean`
Removes the hover effect when set to `true`

##
