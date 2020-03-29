import React from 'react'
import Part from './Part'

const Content = ({parts}) =>
  <div>
    {parts.map((part, i) =>
      <Part key={i} part={part.name} exercises={part.exercises} />
    )}
  </div>

export default Content