import React from 'react'
import { Box } from 'grommet'

import Flag from 'components/Flag'
import CountryMeta from 'components/CountryMeta'

const Header = ({ country }) => (
  <Box>
    <Flag 
      url={country.flag}
      size='large'  
    />
    <CountryMeta
      isTitle
      {...country}
    />
  </Box>
)

export default Header
