<p align="center">
  <img src="https://i.imgur.com/Dtw886b.png">
</p>
<p align="center">
  <img src="https://img.shields.io/static/v1?label=coverage&message=100%&color=success&style=flat-square">
  <img src="https://img.shields.io/static/v1?label=version&message=0.3.2&color=blue&style=flat-square">
</p>

# Lese

Easy to use and lightweight layout framework for @emotion/styled.

Lese was inspired after using Laco, an extremely lightweight package for state management, with React. Lese's goal is to provide a powerful set of tools to quickly build layouts in emotion's styled components while being under 2KBs in size when gzipped. The modern flex and grid specifications are excellent. Thus the framework provides very little abstraction on top of these specs and instead provides convenient shorthand properties to make responsive layouts a breeze. The project is in early alpha so bugs and breaking API changes are to be expected between minor releases.

## To-Do

- [x] Base Components
- [x] Switch to @emotion/styled
- [x] First Draft of Documentation
- [X] API Review
- [X] Add type defintions
- [x] Convenience functions in helpers to reduce code size
- [x] Properties for modifying position of flex and grid children

## Features

- 🔥 Extremely lightweight - <2KBs gzipped
- 📦 Out of the box support for Grid and Flex
- 🚀 Blazing fast development speed

## How It Works

All components (aside from image) inherit from the Base component which includes convienence props for responsive sizing, text modification, and sizing. The framework's goal is not to provide a layer of abstraction over the existing css properties (beyond xAlign and yAlign) but rather to provide easy to use short hand properties.

> The more I use CSS Grid, the more convinced I am that there is no benefit to be had by adding a layer of abstraction over it. CSS Grid is the layout framework baked right into the browser - Jen Simmons

## The Future

`lese` is planned to be the underlying framework of a future project called `morre` which will be a comprehensive UI Framework that aims to avoid the pitfalls popular frameworks such as Bootstrap by making custom styling and components using base styles and components easy and maintainable (no more `!important`). Before that project begins, the API for `lese` must be stable.

# API

## Base

Contains all of the base props for all other components aside from the image component. Possible prop values are as follows:

### Text

### `color: String`

Changes the color of the children

### `fontSize: String`

Changes the font size of the children

### `textAlign: Boolean | String`

Aligns the font by default to the center

### Size

### `height: String`

Changes the height of the element. Note: By default, this will use the `height` css property. However, when responsive is enabled, the component will instead use `max-height: ${height}` and `height: 100%` to make the element responsive.

### `width: String`

Changes the width of the element. Note: By default, this will use the `width` css property. However, when responsive is enabled, the component will instead use `max-width: ${width}` and `width: 100%` to make the element responsive.

### `responsive: Boolean`

Modifies the width and height properties to use max-width and max-height to make the element responsive in situations where all the space to reach its maximum width is not avaliable.

### Layout

### `relative: Boolean`

Short-hand property for applying `position: relative`

## Flex

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

## Flex Child Properties

The flex component also supports properties on child elements

### `xAlign: Boolean | String`

Based on the column boolean, xAlign will automatically switch between justify-self (row) and align-self (column). Sets to "center" by default when set to `true`. Otherwise, it passes the string to the appropriate css property.

### `yAlign: Boolean | String`

Based on the column boolean, xAlign will automatically switch between align-self (row) and justify-self (column). Sets to "center" by default when set to `true`. Otherwise, it passes the string to the appropriate css property.

## Grid

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

## Grid Child Properties

The grid component also supports properties on child elements

### `column: String`

Shorthand for `grid-column`

### `row: String`

Shorthand for `grid-row`

## Image

A basic responsive image component

### `responsive: Boolean`

Sets the `max-width` of the image to `100%`

### `center: Boolean`

Sets the `object-position` to `center`

### `cover: Boolean`

Sets the `object-fit` to `cover`
