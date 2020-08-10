import React from 'react'
import { 
  string,
  bool,
  number
 } from 'prop-types'
import { 
  Box,
  Text
} from 'grommet'

const CountryMeta = ({
  name,
  population,
  capital,
  isTitle
}) => (
  <Box>
    <Box>
      <Text size={isTitle ? 'xxlarge' : 'medium'}>
        {name}
      </Text>
    </Box>
    <Box>
      <Text size='small'>
        pop. {population.toLocaleString('se-SE')}
        {capital && ` • cap. ${capital}`}
      </Text>
    </Box>
  </Box>
)

CountryMeta.propTypes = {
  name: string.isRequired,
  population: number.isRequired,
  capital: string,
  isTitle: bool
}

CountryMeta.defaultProps = {
  isTitle: false
}

export default CountryMeta
