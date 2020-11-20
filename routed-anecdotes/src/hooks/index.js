import { useState } from 'react'

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event, reset) => {
    if (event) {
      setValue(event.target.value)
    } else if (reset){
      setValue('')
    } else {
      console.error('onChange in useField called with zero arguments')
      return undefined
    }
  }


  return {
    type,
    value,
    onChange,
  }
}