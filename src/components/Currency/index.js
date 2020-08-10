import React from 'react'
import { string } from 'prop-types'
import { Text } from 'grommet'
import styled from 'styled-components'

const Symbol = styled(Text)`
  cursor: help;
  border-bottom: 1px dotted lightgrey;
`

const Currency = ({ 
  code,
  name,
  symbol
}) => (
  <Symbol
    size='large'
    a11yTitle={name}
    title={`${name} (${code})`}
  >
    {symbol || code}
  </Symbol>
)

Currency.propTypes = {
  code: string,
  name: string.isRequired,
  symbol: string
}

export default Currency
