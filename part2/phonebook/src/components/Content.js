import React from 'react'
import Person from './Person'

const Content = ({persons}) =>
  <ul>
    {persons.map((person, i) =>
      <Person key={i} name={person.name} number={person.number} />
    )}
  </ul>

export default Content