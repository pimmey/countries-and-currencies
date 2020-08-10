import styled, { css } from 'styled-components'
import { Box } from 'grommet'
import { 
  string,
  oneOf
} from 'prop-types'

const Flag = styled(Box).attrs(props => ({
  style: {
    backgroundImage: `url(${props.url})`
  }
}))`
  ${({ size }) => {
    const side = size === 'large' ? 80 : 40
    return css`
      width: ${side}px;
      height: ${side}px;
      border-radius: ${side / 2}px;
    `
  }}
  border: 1px solid #eeeeee;
  background-position: center;
  background-size: cover;
`

Flag.propTypes = {
  url: string.isRequired,
  size: oneOf([
    'small',
    'large'
  ]).isRequired
}

export default Flag
