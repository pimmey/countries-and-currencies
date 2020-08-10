import { useState } from 'react'

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue)

  const handleChange = ({
    target: {
      value 
    }
  }) => setValue(value)

  return {
    value,
    setValue,
    handleChange
  }
}
