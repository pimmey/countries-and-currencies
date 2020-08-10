import React from 'react'
import { 
  Header,
  TextInput
} from 'grommet'
import { Search } from 'grommet-icons'
import styled, { css } from 'styled-components'

const AnimatedTextInput = styled(TextInput)`
  transition: background .3s ease;
  
  ${({ isLoading }) => isLoading && css`
    background: rgba(255, 255, 255, .1);
  `}
`

const SearchHeader = ({
  searchValue,
  handleChange,
  isLoading
}) => (
  <Header
    background='brand'
    pad='small'
    gap='small'
  >   
    <AnimatedTextInput
      icon={<Search />}
      placeholder='Search for countries...'
      onChange={handleChange}
      value={searchValue}
      isLoading={isLoading}
    />
  </Header>
)

export default SearchHeader
