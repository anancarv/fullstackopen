import React from 'react'
import { ContentProps } from '../types'

const Total: React.FC<ContentProps> = ({courseParts}) => {
  const total = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0)

  return (
    <p>Number of exercises {total}</p>
  )
  }

export default Total