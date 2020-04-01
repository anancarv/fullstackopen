import React from 'react'
import personService from '../services/persons'

const Person = ({name, number, allPersons, setAllPersons}) => {
  const handleDeleteClick = () => {
    const filteredPerson = allPersons.filter(person => person.name === name)
    if (window.confirm(`Delete the ${name} ?`)) {
      personService
        .remove(filteredPerson[0].id)
      console.log(`${filteredPerson[0].name} successfully deleted`)
    }
    setAllPersons(allPersons.filter(person => person.id !== filteredPerson[0].id))
  }

  return (
    <li>
      {name} {number} <button onClick={handleDeleteClick}>delete</button>
    </li>
  )
}

export default Person