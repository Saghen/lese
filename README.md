<p align="center">
  <img src="https://i.imgur.com/Dtw886b.png">
</p>

# Lese

[![npm version](https://badge.fury.io/js/lese.svg)](https://badge.fury.io/js/lese)

Easy to use and lightweight layout framework for styled-components and soon to be ported to emotion.

Lese was inspired after using Laco, an extremely lightweight package for state management, with React. Lese's goal is to provide a powerful set of tools to quickly build layouts in styled-components while being just under 2KBs in size when gzipped. The project is in early alpha so bugs and breaking API changes are to be expected between minor releases.

## To-Do

- [x] Base Components
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
