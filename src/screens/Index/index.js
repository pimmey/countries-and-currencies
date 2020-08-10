import React, { useState } from 'react'

import { searchByCountryName } from 'api/countries'
import { useInput } from 'hooks/input'
import { useDebouncedEffect } from 'hooks/debounced-effect'
import SearchHeader from './components/SearchHeader'
import Suggestion from './components/Suggestion'
import Error from './components/Error'
import CountriesList from './components/CountriesList'
import SelectedCountry from './components/SelectedCountry'

const IndexScreen = () => {
  // State  variables and setters
  const {
    value: searchValue,
    handleChange
  } = useInput('')
  const [countries, setCountries] = useState([])
  const [selected, setSelected] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // Handlers for the SelectedCountry component
  const handleClick = country => setSelected(country)
  const closeLayer = () => setSelected(null)

  // Waiting for the user to stop typing before firing API
  useDebouncedEffect(() => {
    if (!searchValue) {
      setError(null)
      setIsLoading(false)
      return setCountries([])
    }
    setIsLoading(true)
    searchByCountryName(searchValue)
      .then(res => {
        setError(null)
        setIsLoading(false)
        if (!Array.isArray(res)) {
          return setError(res.message)
        }
        setCountries(res)
    })
  }, 250, [searchValue])

  // Conditional rendering
  const renderView = () => {
    switch (true) {
      case Boolean(error):
        return <Error errorMessage={error} />
      case Boolean(countries.length):
        return (
          <>
            <CountriesList
              countries={countries}
              handleClick={handleClick}
            />
            {selected && (
              <SelectedCountry
                selected={selected}
                closeLayer={closeLayer}
              />
            )}
          </>
       )
      default:
        return <Suggestion />
    }
  }

  return (
    <>
      <SearchHeader
        handleChange={handleChange}
        searchValue={searchValue}
        isLoading={isLoading}
      />
      {renderView()}
    </>
  )
}

export default IndexScreen
