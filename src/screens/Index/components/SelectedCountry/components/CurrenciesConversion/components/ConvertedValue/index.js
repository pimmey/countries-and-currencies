import React from 'react'
import { Box } from 'grommet'

import Currency from 'components/Currency'

const ConvertedValue = ({
  value,
  currency
}) => (
  <Box
    direction='row'
    align='center'
    gap='small'
  >
    <Box 
      width='full'
      pad='small'
      background='light-3'
      overflow='hidden'
    >
      {value || '0'}
    </Box>
    <Currency {...currency} />
  </Box>
)

export default ConvertedValue
