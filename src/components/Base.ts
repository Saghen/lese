import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled'
import { propertyGenerator } from '../helpers'

export interface BaseProps {
  relative?: boolean
  margin?: string
  padding?: string
  width?: string
  height?: string
}

const getLayoutProperties = propertyGenerator<BaseProps>([
  ['relative', () => 'position: relative'],
  'margin',
  'padding',
  'width',
  'height',
])

export default styled('div', {
  shouldForwardProp: (prop) => isPropValid(String(prop)) && !['wrap'].includes(String(prop)),
})<BaseProps>`
  ${getLayoutProperties}
`
