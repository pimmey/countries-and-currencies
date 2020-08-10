import React from 'react'
import {
  InfiniteScroll,
  Box
} from 'grommet'

import CountryMeta from 'components/CountryMeta'
import Flag from 'components/Flag'
import Currency from 'components/Currency'
import { validCurrenciesFilter } from 'utils'

const CountriesList = ({ 
  countries,
  handleClick
}) => (
  <InfiniteScroll items={countries}>
    {country => {
      const {
        alpha2Code: id,
        flag,
        currencies
      } = country 

      return (
        <Box
          key={id}
          pad='medium'
          border={{ side: 'bottom' }}
          direction='row'
          align='center'
          justify='between'
          hoverIndicator
          onClick={() => handleClick(country)}
        >
          <Box 
            direction='row'
            align='center'
            gap='small'
          >
            <Flag
              url={flag}
              size='small'  
            />
            <CountryMeta {...country} />
          </Box>
          <Box align='end'>
            {currencies
              .filter(validCurrenciesFilter)
              .map(currency => (
                <Currency 
                  key={`${id}-${currency.code}`}
                  {...currency}
                />
              ))}
          </Box>
        </Box>
      )
    }}
  </InfiniteScroll>
)

export default CountriesList
