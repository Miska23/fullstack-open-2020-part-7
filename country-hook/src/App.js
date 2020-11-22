import React, { useState, useEffect } from 'react'
import axios from 'axios'

//* useField hook
const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

//* useCountry hook
const useCountry = (name, search) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    if (name && name.length > 0) {
      axios
      .get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
      .then(response => {
        const countryObject = {
          data: response.data[0],
          found: true
        }
        setCountry(countryObject);
      })
      .catch(error => {
        const countryObject = {
          found: false
        }
        setCountry(countryObject);
      })
    } else {
      return;
    }
    }, [name, search])
  return country
  } 

//* Country component
const Country = ({ country }) => {

  if (!country) {
    return null
  }

  if (!country.found) {
    return (
      <div>
        not found...
      </div>
    )
  }

  return (
    <div>
      <h3>{country.data.name} </h3>
      <div>capital {country.data.capital} </div>
      <div>population {country.data.population}</div> 
      <img src={country.data.flag} height='100' alt={`flag of ${country.data.name}`}/>  
    </div>
  )
}

//* App component
const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const [search, setSearch] = useState(false)
  const country = useCountry(name, search)

  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
    setSearch(!search)
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App