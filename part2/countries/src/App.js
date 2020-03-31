import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Content from './components/Content'
import Filter from './components/Filter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setAllCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    if (newFilter) {
      const regex = new RegExp( newFilter, 'i' );
      const filteredCountries = () => allCountries.filter(country => country.name.match(regex))
      setCountries(filteredCountries)
    }
  }

  return (
    <div>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <Content countries={countries} setCountries={setCountries} />
    </div>
  )
}

export default App