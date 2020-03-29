import React from 'react'
import Course from './components/Course'

const App = ({courses}) =>
  <div>
    <Course courses={courses} />
  </div>

export default App