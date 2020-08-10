import React, {
  useState,
  useEffect
} from 'react'
import {
  Box,
  Text
} from 'grommet'

import { useInput } from 'hooks/input'
import {
  validCurrenciesFilter,
  prettifyNumber
} from 'utils'
import { getMockRates } from 'api/mock-rates'
import Error from './components/Error'
import SekInput from './components/SekInput'
import ConvertedValue from './components/ConvertedValue'

const CurrenciesConversion = ({ 
  country: {
    currencies,
    alpha2Code: id,
  }
}) => {
  // State variables
  const {
    value: sek,
    handleChange
  } = useInput('')
  const [hasError, setHasError] = useState(false)
  const [rates, setRates] = useState({})
  const [values, setValues] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Excluding invalid currencies
  const validCurrencies = currencies.filter(validCurrenciesFilter)

  // Fetching rates (HTTP request once an hour)
  useEffect(() => {
    setIsLoading(true)
    getMockRates()
      .then(res => {
        if (res.success) {
          setHasError(false)
          return setRates(res.rates)
        }
        setHasError(true)
      })
      .finally(() => setIsLoading(false))
  }, []) // eslint-disable-line

  // Converter
  const convert = value => {
    const convertedValues = validCurrencies.map(({ code }) => {
      if (!rates[code]) {
        return 'No data for this currency 😔'
      }
      return prettifyNumber((value * rates[code]).toFixed(2))
    })
    setValues(convertedValues)
  }

  return (
    <Box
      background='light-1'
      pad='medium'
      round
      gap='small'
    >
      <Text size='large'>
        Convert currencies
      </Text>
      {hasError && (
        <Error />
      )}
      <SekInput
        handleChange={e => {
          handleChange(e)
          return convert(e.target.value)
        }}
        sek={sek}
        hasError={hasError}
        isLoading={isLoading}
      />
      {validCurrencies.map((
        currency,
        index
      ) => (
        <ConvertedValue
          key={`${id}-${currency.code}`}
          value={values[index]}
          currency={currency}
        />
      ))}
    </Box>
  )
}

export default CurrenciesConversion
