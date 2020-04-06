import React from 'react'
import Person from './Person'

const Content = ({persons, allPersons, deletePerson}) => {
  console.log(persons.length)
  if (persons.length === 0) {
    return (
      <ul>
        {allPersons.map((person, i) =>
          <Person key={i} person={person} deletePerson={deletePerson} />
        )}
      </ul>
    )
  } else {
    return (
      <ul>
        {persons.map((person, i) =>
          <Person key={i} person={person} deletePerson={deletePerson} />
        )}
      </ul>
    )
  }
}

export default Content