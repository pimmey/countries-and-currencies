import React from 'react'
import { Box } from 'grommet'

const Error = () => (
  <Box
    background='status-error'
    pad='medium'
    round
  >
    Oops! Couldn't fetch rates. Refresh page or contact us for help.
  </Box>
)

export default Error
