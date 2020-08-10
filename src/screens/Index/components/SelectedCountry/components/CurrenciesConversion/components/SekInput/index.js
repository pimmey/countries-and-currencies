import React from 'react'
import { 
  Box,
  TextInput
} from 'grommet'

import Currency from 'components/Currency'

const SekInput = ({
  handleChange,
  sek,
  hasError,
  isLoading
}) => (
  <Box
    direction='row'
    align='center'
    gap='small'
  >
    <TextInput
      onChange={handleChange}
      value={sek}
      placeholder={`0.00${isLoading ? ' (fetching rates...)' : ''}`}
      type='number'
      disabled={hasError || isLoading}
    />
    <Currency
      code='SEK'
      name='Swedish krona'
      symbol='kr'
    />
  </Box>
)

export default SekInput
