import React from 'react'
import {
  Box,
  Image,
  Text
} from 'grommet'

const Suggestion = () => (
  <Box
    pad='medium'
    basis='small'
    justify='center'
    align='center'
  >
    <Image
      src='images/around-the-world.png'
      style={{ 
        width: '100%',
        maxWidth: 400
      }}
      margin={{
        top: 'large',
        bottom: 'large'
      }} 
    />
    <Text size='large'>
      Type something in the search field above :-)
    </Text>
  </Box>
)

export default Suggestion
