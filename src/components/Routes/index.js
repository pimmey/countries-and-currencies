import React from 'react'
import { Route } from 'react-router-dom'

import ROUTES from './config/routes'

const Routes = () => ROUTES.map(route => (
  <Route
    key={route.path}
    {...route}
  />
))

export default Routes
