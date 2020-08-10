import React from 'react'
import {
  Box,
  Image,
  Text
} from 'grommet'

const Error = ({ errorMessage }) => (
  <Box
    pad='medium'
    justify='center'
    align='center'
  >
    <Image
      src='images/empty.png'
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
      There was an error: "{errorMessage}" :-(
      <br />
      Try again with a different query or contact us for help.
    </Text>
  </Box>
)

export default Error
