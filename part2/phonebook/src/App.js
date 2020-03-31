import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Content from './components/Content'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
    event.preventDefault()
    const person = persons.filter((person) =>
        person.name === newName
    )

    if (person.length !== 0) {
        alert(`${newName} is already added to phonebook`)
    } else {
        const personObject = {
            name: newName,
            number: newNumber
          }
          setPersons(persons.concat(personObject))
          setNewName('')
          setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    const regex = new RegExp( newFilter, 'i' );
    const filteredPersons = () =>
        persons.filter(person => person.name.match(regex))
        setPersons(filteredPersons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <h2>Add new person</h2>
      <PersonForm onSubmit={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Content persons={persons} />
    </div>
  )
}

export default App