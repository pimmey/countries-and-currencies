import React from 'react'
import { 
  Layer,
  Box,
  Button
} from 'grommet'
import styled from 'styled-components'
import { Close } from 'grommet-icons'

import Header from './components/Header'
import CurrenciesConversion from './components/CurrenciesConversion'

const ResponsiveLayer = styled(Layer)`
  @media screen and (min-width: 769px) {
    width: 75vw;
  }
`

const SelectedCountry = ({
  selected: country,
  closeLayer
}) => (
  <ResponsiveLayer
    position='right'
    full='vertical'
    onEsc={closeLayer}
    onClickOutside={closeLayer}
  >
    <Box
      background='light-1'
      pad='small'
      justify='center'
      align='end'
    >
      <Button
        icon={<Close />}
        onClick={closeLayer}
      />
    </Box>
    <Box
      direction='row'
      align='start'
      overflow='auto'
      pad={{
        vertical: 'large',
        horizontal: 'xlarge'
      }}
    >
      <Box
        gap='medium' 
        flex
      >
        <Header country={country} />
        <CurrenciesConversion country={country} />
      </Box>
    </Box>
  </ResponsiveLayer>
)

export default SelectedCountry
