<p align="center">
  <img src="https://i.imgur.com/Dtw886b.png">
</p>
<p align="center">
  <img src="https://img.shields.io/static/v1?label=coverage&message=100%&color=success&style=flat-square">
  <img src="https://img.shields.io/static/v1?label=version&message=0.5.6&color=blue&style=flat-square">
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

Contains all of the base props for Flex and Grid components. Possible prop values are as follows:

### `relative: boolean`

Short-hand property for applying `position: relative`

### `padding: string`

Short-hand property for applying `padding`

### `margin: string` 

Short-hand property for applying `margin`

## Row/Column

A flex container with `flex-direction: row` or `flex-direction: column` set by default based on the selected element. Includes 3 main abstractions for making flex easier to interact with.

### `xAlign: boolean | string`

Based on the component (Row or Column), xAlign will automatically switch between justify-content (Row) and align-items (Column). Defaults to "center" when set to `true`. Otherwise, it passes the string to the appropriate css property.

### `yAlign: boolean | string`

Based on the component (Row or Column), xAlign will automatically switch between align-items (Row) and justify-content (Column). Defaults to "center" when set to `true`. Otherwise, it passes the string to the appropriate css property.

### `separation: string | string[]`

Based on the component (Row or Column), separation will use margin-top (Column) or margin-left (Row) on its immediate children on all but the first child using `* + *`. The value of the string will be passed to the appropriate css property. When the value is a single CSS length, such as `8px`, all elements are separated based on this value. When multiple values are provided in the form of a string array or space delimited string, each index will correspond to the separation of one element. Additionally, a rest operator (`...`) can be used anywhere in the string for defaulting a separation value.

```tsx
() => (
  <Row separation="8px 12px">
    <div>a</div>
    {/* Separated by 8px */}
    <div>b</div>
    {/* Separated by 12px */}
    <div>c</div>
    {/* No separation */}
    <div>d</div>
  </Row>
)
```

```tsx
() => (
  <Row separation="8px ...10px 12px">
    <div>a</div>
    {/* Separated by 8px */}
    <div>b</div>
    {/* Separated by 10px */}
    <div>c</div>
    {/* Separated by 10px */}
    <div>d</div>
    {/* Separated by 12px */}
    <div>e</div>
  </Row>
)
```


### `wrap: boolean | string`

Sets the flex-wrap css property. Defaults to "wrap" when set to `true`.

## Grid

### `columns: string`

Shorthand for `grid-template-columns`

### `rows: string`

Shorthand for `grid-template-rows`

### `autoColumns: string`

Shorthand for `grid-auto-columns`

### `autoRows: string`

Shorthand for `grid-auto-rows`

### `columnGap: string`

Shorthand for `grid-column-gap`

### `rowGap: string`

Shorthand for `grid-row-gap`

### `gap: string`

Shorthand for `grid-gap`

### `xAlign: boolean | string`

Shorthand for `justify-items`. Defaults to `center` when set to true.

### `yAlign: boolean | string`

Shorthand for `align-items`. Defaults to `center` when set to true.

### `align: boolean | string`

Shorthand for `place-items`. Defaults to `center center` when set to true.
