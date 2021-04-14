import React from 'react'
import { useQuery  } from '@apollo/client'
import BornYearForm from './BornYearForm'
import { ALL_AUTHORS } from '../queries'

const Authors = ({show, notify}) => {
  const result = useQuery(ALL_AUTHORS)

  if (!show) {
    return null
  }

  if (result.loading)  {
    return <div>loading...</div>
  }

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              born
            </th>
            <th>
              books
            </th>
          </tr>
          {result.data.allAuthors.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          )}
        </tbody>
      </table>

      <BornYearForm notify={notify} allAuthors={result.data.allAuthors}/>
    </div>
  )
}

export default Authors
