import React from 'react'
import Person from './Person'

const Content = ({persons, allPersons, setAllPersons}) => {
  console.log(persons.length)
  if (persons.length === 0) {
    return (
      <ul>
        {allPersons.map((person, i) =>
          <Person key={i} name={person.name} number={person.number} allPersons={allPersons} setAllPersons={setAllPersons}/>
        )}
      </ul>
    )
  } else {
    return (
      <ul>
        {persons.map((person, i) =>
          <Person key={i} name={person.name} number={person.number} allPersons={allPersons} setAllPersons={setAllPersons}/>
        )}
      </ul>
    )
  }
}

export default Content