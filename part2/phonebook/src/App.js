import React, { useState, useEffect } from 'react'
import Content from './components/Content'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ allPersons, setAllPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
      setAllPersons(initialPersons)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const person = allPersons.filter((person) =>
        person.name === newName
    )

    const personObject = person[0]
    const updatedPerson = { ...personObject, number: newNumber }

    if (person.length !== 0) {
      if (window.confirm(`${personObject.name} is already added to the phonebook, replace the old number with a new one ?`)) {
        personService
          .update(updatedPerson.id, updatedPerson).then(returnedPerson => {
            console.log(`${returnedPerson.name} successfully updated`)
            setAllPersons(allPersons.map(personItem => personItem.id !== personObject.id ? personItem : returnedPerson))
          })
          .catch(() => {
            alert(`${personObject.name} was already deleted from server` )
          })
      }
    } else {
        const personObject = {
            name: newName,
            number: newNumber
          }
          personService
            .create(personObject)
            .then(returnedPerson => {
              setAllPersons(allPersons.concat(returnedPerson))
              setNewName('')
              setNewNumber('')
      })
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
    const filteredPersons = () => allPersons.filter(person => person.name.match(regex))
    setPersons(filteredPersons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <h2>Add new person</h2>
      <PersonForm onSubmit={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Content persons={persons} allPersons={allPersons} setAllPersons={setAllPersons} />
    </div>
  )
}

export default App