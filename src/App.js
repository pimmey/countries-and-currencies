import React from 'react'
import { Grommet } from 'grommet'
import { BrowserRouter } from 'react-router-dom'

import { 
  theme,
  GlobalStyle
 } from './styles'
import Routes from './components/Routes'

const App = () => (
  <Grommet theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Grommet>
)

export default App
